 // Totally not using this to cheat! 
 // Script by your one and only animu girl - Brandy (/w\)
 
 module.exports = function LocationInfo(dispatch) {  
 
	let cid = null,
		enabled = false // true = Enabled by default
	
	dispatch.hook('S_LOGIN', 1, event => {
		({cid} = event)
	})
	
	dispatch.hook('C_CHAT', 1, event => {
		if(/^<FONT>!location<\/FONT>$/i.test(event.message)) {
			if(!enabled) {
				enabled = true
				message('LocationInfo <font color="#00ff99">Enabled</font>')
			}
			else {
				enabled = false
				message('LocationInfo <font color="#ff3300">Disabled</font>')
			}
			return false
		}
	})
  
	function message(msg) {
		dispatch.toClient('S_CHAT', 1, {
			channel: 24,
			authorID: 0,
			unk1: 0,
			gm: 0,
			unk2: 0,
			authorName: '',
			message: msg
		})
	}
	
	dispatch.hook('C_PLAYER_LOCATION', 1, event => {
		if(enabled) console.log('Location XYZW [ %d | %d | %d | %d ]', Math.round(event.x1), Math.round(event.y1), Math.round(event.z1), event.w)
	})
	
	dispatch.hook('S_LOAD_TOPO', 1, (event) => {      
                if(enabled) console.log('ZoneID', event.zone)
    })
 }
