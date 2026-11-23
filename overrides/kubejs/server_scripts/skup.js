// kubejs/server_scripts/wholesale_buyback.js

const DIMENSION = 'minecraft:overworld'

// Dwa niezależne perony skupu
const STATIONS = [
    {
        name: 'Stacja A',
        input:  { x: 169, y: 64, z: 347 }, // 3 - odbiór
        output: { x: 165, y: 69, z: 350 }, // 4 - wypłata
    },
    {
        name: 'Stacja B',
        input:  { x: 190, y: 64, z: 347 }, // 1 - odbiór
        output: { x: 186, y: 69, z: 350 }, // 2 - wypłata
    }
]

// Cennik skupu: batch = wielkość partii, spurs = zapłata w Spurs
// (Bevel = 8, Sprocket = 16, Cog = 64, Crown = 512, Sun = 4096)
const BUYBACK_RATES = [
    { item: 'create:electron_tube',          batch: 64, spurs: 40 },  // 2 Sprockets + 1 Bevel
    { item: 'create:transmitter',             batch: 64, spurs: 80 },  // 1 Cog + 2 Bevels
    { item: 'create:precision_mechanism',    batch: 64, spurs: 160 }, // 2 Cogs + 2 Sprockets
    { item: 'create:railway_casing',         batch: 64, spurs: 144 }, // 2 Cogs + 1 Sprocket
    { item: 'createaddition:capacitor',      batch: 64, spurs: 88 },  // 1 Cog + 1 Sprocket + 1 Bevel
    { item: 'createaddition:gold_spool',     batch: 64, spurs: 64 },  // 1 Cog
    { item: 'create:experience_block',       batch: 64, spurs: 192 }, // 3 Cogs

    // === PRZEMYSŁ I CHEMIA (TFMG) ===
    { item: 'createcompression:compressed_adesite_alloy_5x',    batch: 64, spurs: 512 },  // 1 Crown
    { item: 'createcompression:compressed_brass_5x',            batch: 64, spurs: 512 },  // 1 Crown
    { item: 'createcompression:compressed_zinc_6x',             batch: 64, spurs: 512 },  // 1 Crown
    { item: 'tfmg:steel_mechanism',                             batch: 64, spurs: 320 }, // 5 Cogs

    // === ELEKTRONIKA (Refined Storage) ===
    { item: 'refinedstorage:basic_processor',       batch: 64, spurs: 96 },  // 1 Cog + 2 Sprockets
    { item: 'refinedstorage:improved_processor',    batch: 64, spurs: 192 }, // 3 Cogs
    { item: 'refinedstorage:advanced_processor',    batch: 64, spurs: 384 }, // 6 Cogs

    // === ENDGAME (Create Nuclear) ===
    { item: 'createnuclear:enriched_yellowcake',    batch: 64, spurs: 512 }, // 1 Crown

    // === MILESTONES ===
    { item: 'kubejs:calibrated_eye',         batch: 64, spurs: 256 }, // 1 Cog + 1 Crown
    { item: 'kubejs:frequency_mechanism',    batch: 64, spurs: 128 }, // 2 Cogs
    { item: 'kubejs:tuned_crystal',          batch: 64, spurs: 64 }, // 1 Cog
]

const COINS = [
    { id: 'numismatics:sun',      value: 4096 },
    { id: 'numismatics:crown',    value: 512 },
    { id: 'numismatics:cog',      value: 64 },
    { id: 'numismatics:sprocket', value: 16 },
    { id: 'numismatics:bevel',    value: 8 },
    { id: 'numismatics:spur',     value: 1 },
]

function calculateCoinStacks(totalSpurs) {
    let remaining = totalSpurs
    let stacks = []
    for (let coin of COINS) {
        let count = Math.floor(remaining / coin.value)
        if (count > 0) {
            remaining -= count * coin.value
            while (count > 0) {
                let size = Math.min(count, 64)
                stacks.push(Item.of(coin.id, size))
                count -= size
            }
        }
    }
    return stacks
}

function countEmptySlots(container) {
    let empty = 0
    for (let i = 0; i < container.getContainerSize(); i++) {
        if (container.getItem(i).isEmpty()) empty++
    }
    return empty
}

function insertCoins(container, stacks) {
    for (let toInsert of stacks) {
        let remaining = toInsert.getCount()
        let coinId = toInsert.id

        for (let i = 0; i < container.getContainerSize() && remaining > 0; i++) {
            let slot = container.getItem(i)
            if (!slot.isEmpty() && slot.id == coinId && slot.getCount() < slot.getMaxStackSize()) {
                let add = Math.min(slot.getMaxStackSize() - slot.getCount(), remaining)
                slot.grow(add)
                remaining -= add
            }
        }
        for (let i = 0; i < container.getContainerSize() && remaining > 0; i++) {
            if (container.getItem(i).isEmpty()) {
                let add = Math.min(64, remaining)
                container.setItem(i, Item.of(coinId, add))
                remaining -= add
            }
        }
    }
    container.setChanged()
}

function processStation(level, station) {
    let inPos = station.input
    let outPos = station.output

    if (!level.hasChunk(inPos.x >> 4, inPos.z >> 4)) return
    if (!level.hasChunk(outPos.x >> 4, outPos.z >> 4)) return

    let inBlock = level.getBlock(inPos.x, inPos.y, inPos.z)
    let outBlock = level.getBlock(outPos.x, outPos.y, outPos.z)
    if (!inBlock || !outBlock || !inBlock.entity || !outBlock.entity) return

    let inInv = inBlock.entity
    let outInv = outBlock.entity
    if (typeof inInv.getContainerSize !== 'function' || typeof outInv.getContainerSize !== 'function') return

    for (let rate of BUYBACK_RATES) {
        let total = 0
        for (let i = 0; i < inInv.getContainerSize(); i++) {
            let stack = inInv.getItem(i)
            if (!stack.isEmpty() && stack.id == rate.item) {
                total += stack.getCount()
            }
        }

        let batches = Math.floor(total / rate.batch)
        if (batches <= 0) continue

        let coinStacks = calculateCoinStacks(batches * rate.spurs)
        if (countEmptySlots(outInv) < coinStacks.length) continue

        let toRemove = batches * rate.batch
        for (let i = 0; i < inInv.getContainerSize() && toRemove > 0; i++) {
            let stack = inInv.getItem(i)
            if (!stack.isEmpty() && stack.id == rate.item) {
                let take = Math.min(stack.getCount(), toRemove)
                inInv.removeItem(i, take)
                toRemove -= take
            }
        }
        inInv.setChanged()
        insertCoins(outInv, coinStacks)
    }
}

ServerEvents.tick(event => {
    if (event.server.tickCount % 20 !== 0) return

    let level = event.server.getLevel(DIMENSION)
    if (!level) return

    for (let station of STATIONS) {
        processStation(level, station)
    }
})