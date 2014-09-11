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
		stats: [
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
		]
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
		stats: [
			{ // level 1
				cost: 125, // game currency
				dmg: 10, // per shot
				rng: 75, // pixel radius
				rte: 30 // tick interval
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
		]
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
		stats: [
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
		]
	},
	f: {
		type: 'f',
		counters: 'e',
		title: 'Fire',
		desc: 'Splash dmg',
		dmg: 'High',
		bonus: '+50% vs Earth',
		rng: 'Low',
		rte: 'Medium',
		hue: 0,
		stats: [
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
		]
	}
};