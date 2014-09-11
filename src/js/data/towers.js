/*==============================================================================

Towers

==============================================================================*/

g.data.towers = {
	e: {
		type: 'e',
		counters: 'a',
		title: 'Earth',
		desc: 'Well Rounded',
		dmg: 'Medium',
		bonus: '+50% vs Air',
		rng: 'Medium',
		rte: 'Medium',
		hue: 120,
		stats: /*[
			{ // level 1
				cost: 100, // game currency
				dmg: 10, // per shot
				rng: 100, // pixel radius
				rte: 30 // tick interval
			},
			{ // level 2
				cost: 125, // game currency
				dmg: 12, // per shot
				rng: 60, // pixel radius
				rte: 28 // tick interval
			},
			{ // level 3
				cost: 175, // game currency
				dmg: 14, // per shot
				rng: 70, // pixel radius
				rte: 26 // tick interval
			}
		]*/
		[{cst:100,dmg:10,rng:80,rte:30},{cst:125,dmg:13,rng:92,rte:26},{cst:157,dmg:16,rng:106,rte:22}]
	},
	w: {
		type: 'w',
		counters: 'f',
		title: 'Water',
		desc: 'Slows Enemies',
		dmg: 'Medium',
		bonus: '+50% vs Fire',
		rng: 'Low',
		rte: 'High',
		hue: 200,
		stats: /*[
			{ // level 1
				cost: 125, // game currency
				dmg: 10, // per shot
				rng: 75, // pixel radius
				rte: 30 // tick interval
			},
			{ // level 2
				cost: 150, // game currency
				dmg: 12, // per shot
				rng: 85, // pixel radius
				rte: 28 // tick interval
			},
			{ // level 3
				cost: 200, // game currency
				dmg: 14, // per shot
				rng: 95, // pixel radius
				rte: 26 // tick interval
			}
		]*/
		[{cst:125,dmg:10,rng:70,rte:25},{cst:157,dmg:13,rng:77,rte:20},{cst:196,dmg:16,rng:85,rte:14}]
	},
	a: {
		type: 'a',
		counters: 'w',
		title: 'Air',
		desc: 'Pierce Enemies',
		dmg: 'Low',
		bonus: '+50% vs Water',
		rng: 'High',
		rte: 'Medium',
		hue: 60,
		stats: /*[
			{ // level 1
				cost: 125, // game currency
				dmg: 10, // per shot
				rng: 125, // pixel radius
				rte: 10 // tick interval
			},
			{ // level 2
				cost: 150, // game currency
				dmg: 12, // per shot
				rng: 60, // pixel radius
				rte: 28 // tick interval
			},
			{ // level 3
				cost: 200, // game currency
				dmg: 14, // per shot
				rng: 70, // pixel radius
				rte: 26 // tick interval
			}
		]*/
		[{cst:125,dmg:8,rng:90,rte:30},{cst:157,dmg:10,rng:108,rte:26},{cst:196,dmg:11,rng:130,rte:22}]
	},
	f: {
		type: 'f',
		counters: 'e',
		title: 'Fire',
		desc: 'Splash dmg',
		dmg: 'High',
		bonus: '+50% vs Earth',
		rng: 'Medium',
		rte: 'Low',
		hue: 0,
		stats: /*[
			{ // level 1
				cost: 150, // game currency
				dmg: 10, // per shot
				rng: 75, // pixel radius
				rte: 30 // tick interval
			},
			{ // level 2
				cost: 175, // game currency
				dmg: 12, // per shot
				rng: 60, // pixel radius
				rte: 28 // tick interval
			},
			{ // level 3
				cost: 225, // game currency
				dmg: 14, // per shot
				rng: 70, // pixel radius
				rte: 26 // tick interval
			}
		]*/
		[{cst:150,dmg:12,rng:80,rte:35},{cst:188,dmg:17,rng:92,rte:32},{cst:235,dmg:22,rng:106,rte:29}]
	}
};

/*

Dmg
	L 8 + 15%/up
	M 10 + 25%/up
	H 12 + 35%/up

Rng
	L 70 + 10%/up
	M 80 + 15%/up
	H 90 + 20%/up

Rte
	base of 60
	L 25 + 10%/up    60 - 25 = 35
	M 30 + 15%/up    60 - 30 = 30
	H 35 + 20%/up    60 - 35 = 25

*/