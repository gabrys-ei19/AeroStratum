// --- SKRYPT REJESTRACJI PRZEDMIOTÓW (startup_scripts) ---
StartupEvents.registry('item', event => {
    
    // Rejestracja przedmiotu przejściowego (płytki drukowanej)
    event.create('incomplete_printed_circuit', 'create:sequenced_assembly')
         .displayName('Incomplete Printed Circuit')

    // Rejestracja maszyn redstonowych (Andesite i Brass)
    event.create('andesite_redstone_machine')
         .displayName('Andesite Redstone Machine')

    event.create('zinc_redstone_machine')
         .displayName('Zinc Redstone Machine')

    event.create('brass_redstone_machine')
         .displayName('Brass Redstone Machine')
         
    // 1. Przedmiot transmisyjny storage componentów
    event.create('incomplete_storage_component', 'create:sequenced_assembly')
         .displayName('Incomplete Storage Component')

    // 2. Tuned Crystal
    event.create('tuned_crystal')
         .displayName('Tuned Crystal')

    event.create('incomplete_tuned_crystal', 'create:sequenced_assembly')
         .displayName('Incomplete Tuned Crystal')

    // 3. Calibrated Eye
    event.create('calibrated_eye')
         .displayName('Calibrated Eye')

    event.create('incomplete_calibrated_eye', 'create:sequenced_assembly')
         .displayName('Incomplete Calibrated Eye')

    // 4. Frequency Mechanism
    event.create('frequency_mechanism')
         .displayName('Frequency Mechanism')

    event.create('incomplete_frequency_mechanism', 'create:sequenced_assembly')
         .displayName('Incomplete Frequency Mechanism')

     event.create('digital_drawer')
         .displayName('Digital Drawer')

     event.create('digital_tank')
         .displayName('Digital Tank')

     event.create('digital_accumulator')
         .displayName('Digital accumulator')

     event.create('frequency_tunner')
          .displayName('Frequency tunner')
})