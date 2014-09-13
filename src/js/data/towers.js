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
		stats: [{cst:200,dmg:15,rng:85,rte:30},{cst:250,dmg:19,rng:102,rte:26},{cst:313,dmg:24,rng:123,rte:21}]
	},
	w: {
		type: 'w',
		counters: 'f',
		title: 'Water',
		dmg: 'Medium',
		bonus: '+50% vs Fire',
		rng: 'Low',
		rte: 'High',
		stats: [{cst:300,dmg:15,rng:70,rte:25},{cst:375,dmg:19,rng:77,rte:19},{cst:469,dmg:24,rng:85,rte:12}]
	},
	a: {
		type: 'a',
		counters: 'w',
		title: 'Air',
		dmg: 'Low',
		bonus: '+50% vs Water',
		rng: 'High',
		rte: 'Medium',
		stats: [{cst:250,dmg:10,rng:100,rte:30},{cst:313,dmg:12,rng:130,rte:26},{cst:391,dmg:14,rng:169,rte:21}]
	},
	f: {
		type: 'f',
		counters: 'e',
		title: 'Fire',
		dmg: 'High',
		bonus: '+50% vs Earth',
		rng: 'Medium',
		rte: 'Low',
		stats: [{cst:250,dmg:20,rng:85,rte:35},{cst:313,dmg:27,rng:102,rte:32},{cst:391,dmg:37,rng:123,rte:29}]
	}
};