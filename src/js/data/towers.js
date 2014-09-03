/*==============================================================================

Towers

==============================================================================*/

g.data.towers = {
	e: {
		type: 'e',
		counters: 'a',
		title: 'Earth',
		description: {
			main: 'Well Rounded',
			damage: 'Medium +50% vs Air',
			range: 'Medium',
			rate: 'Medium'
		},
		hue: 120,
		stats: [
			{ // level 1
				cost: 100, // game currency
				damage: 10, // per shot
				range: 50, // pixel radius
				rate: 30 // tick interval
			},
			{ // level 2
				cost: 125, // game currency
				damage: 12, // per shot
				range: 60, // pixel radius
				rate: 28 // tick interval
			},
			{ // level 3
				cost: 175, // game currency
				damage: 14, // per shot
				range: 70, // pixel radius
				rate: 26 // tick interval
			}
		]
	},
	w: {
		type: 'w',
		counters: 'f',
		title: 'Water',
		description: {
			main: 'Slows Enemies',
			damage: 'Medium +50% vs Fire',
			range: 'Low',
			rate: 'High'
		},
		hue: 200,
		stats: [
			{ // level 1
				cost: 100, // game currency
				damage: 10, // per shot
				range: 50, // pixel radius
				rate: 30 // tick interval
			},
			{ // level 2
				cost: 125, // game currency
				damage: 12, // per shot
				range: 60, // pixel radius
				rate: 28 // tick interval
			},
			{ // level 3
				cost: 175, // game currency
				damage: 14, // per shot
				range: 70, // pixel radius
				rate: 26 // tick interval
			}
		]
	},
	a: {
		type: 'a',
		counters: 'w',
		title: 'Air',
		description: {
			main: '',
			damage: 'Low +50% vs Water',
			range: 'High',
			rate: 'Medium'
		},
		hue: 60,
		stats: [
			{ // level 1
				cost: 100, // game currency
				damage: 10, // per shot
				range: 50, // pixel radius
				rate: 30 // tick interval
			},
			{ // level 2
				cost: 125, // game currency
				damage: 12, // per shot
				range: 60, // pixel radius
				rate: 28 // tick interval
			},
			{ // level 3
				cost: 175, // game currency
				damage: 14, // per shot
				range: 70, // pixel radius
				rate: 26 // tick interval
			}
		]
	},
	f: {
		type: 'f',
		counters: 'e',
		title: 'Fire',
		description: {
			main: 'Splash Damage',
			damage: 'High +50% vs Earth',
			range: 'Low',
			rate: 'Medium'
		},
		hue: 0,
		stats: [
			{ // level 1
				cost: 100, // game currency
				damage: 10, // per shot
				range: 50, // pixel radius
				rate: 30 // tick interval
			},
			{ // level 2
				cost: 125, // game currency
				damage: 12, // per shot
				range: 60, // pixel radius
				rate: 28 // tick interval
			},
			{ // level 3
				cost: 175, // game currency
				damage: 14, // per shot
				range: 70, // pixel radius
				rate: 26 // tick interval
			}
		]
	}
};