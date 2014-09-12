/*==============================================================================

Towers

==============================================================================*/

// gen from http://codepen.io/jackrugile/pen/tDJyv/

g.data.towers = {
	e: {
		type: 'e',
		counters: 'a',
		title: 'Earth',
		dmg: 'Medium',
		bonus: '+50% vs Air',
		rng: 'Medium',
		rte: 'Medium',
		stats: [{cst:100,dmg:10,rng:80,rte:30},{cst:125,dmg:13,rng:92,rte:26},{cst:157,dmg:16,rng:106,rte:22}]
	},
	w: {
		type: 'w',
		counters: 'f',
		title: 'Water',
		dmg: 'Medium',
		bonus: '+50% vs Fire',
		rng: 'Low',
		rte: 'High',
		stats: [{cst:125,dmg:10,rng:70,rte:25},{cst:157,dmg:13,rng:77,rte:20},{cst:196,dmg:16,rng:85,rte:14}]
	},
	a: {
		type: 'a',
		counters: 'w',
		title: 'Air',
		dmg: 'Low',
		bonus: '+50% vs Water',
		rng: 'High',
		rte: 'Medium',
		stats: [{cst:125,dmg:8,rng:90,rte:30},{cst:157,dmg:10,rng:108,rte:26},{cst:196,dmg:11,rng:130,rte:22}]
	},
	f: {
		type: 'f',
		counters: 'e',
		title: 'Fire',
		dmg: 'High',
		bonus: '+50% vs Earth',
		rng: 'Medium',
		rte: 'Low',
		stats: [{cst:150,dmg:12,rng:80,rte:35},{cst:188,dmg:17,rng:92,rte:32},{cst:235,dmg:22,rng:106,rte:29}]
	}
};