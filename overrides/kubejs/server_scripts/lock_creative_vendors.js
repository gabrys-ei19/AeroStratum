BlockEvents.rightClicked('numismatics:creative_vendor', event => {
    const { player, block, server } = event

    if (!player.isCreative()) {
        const { x, y, z } = block.pos
        server.runCommandSilent(`data merge block ${x} ${y} ${z} {Owner:[I;0,0,0,0]}`)
    }
})