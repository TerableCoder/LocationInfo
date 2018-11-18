const Command = require('command')

module.exports = function LocationInfo(mod) {
	const command = Command(mod)
 
	let enabled = false
	
	mod.hook('C_PLAYER_LOCATION', 5, event => {
		if(enabled) console.log('Location XYZW [ %d | %d | %d | %d ]', Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z), event.w)
	})
	
	mod.hook('S_LOAD_TOPO', 3, event => {
		if(enabled) console.log('ZoneID', event.zone)
    })

	command.add('location', (arg) => {
        enabled = !enabled
        command.message('[LocationInfo] ' + (enabled ? 'enabled' : 'disabled'))
    })
 }
