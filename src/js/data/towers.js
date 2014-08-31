/*==============================================================================

Towers

==============================================================================*/

g.data.towers = {
	e: {
		type: 'e',
		counters: 'a',
		title: 'Earth',
		description: {
			main: 'Well Rounded Tower',
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
			{
				cost: 125, // game currency
				damage: 12, // per shot
				range: 60, // pixel radius
				rate: 28 // tick interval
			},
			{
				cost: 175, // game currency
				damage: 14, // per shot
				range: 70, // pixel radius
				rate: 26 // tick interval
			},
			{
				cost: 250, // game currency
				damage: 16, // per shot
				range: 80, // pixel radius
				rate: 24 // tick interval
			}
		]
	}
};
/*
   earth
            damage: med + dmg to air
            range: med
            rate: med
            standard tower
            chance of earthquake, which is a ring of damage that covers the whole level
            weapon is rock/projectiles
        water
            damage: med + dmg to fire
            range: low
            rate: high
            slows enemy
            chance of casting freeze blast
            weapon is constant flow/stream
        air
            damage: low + dmg to water
            range: high
            rate: med
            chance of chain hit
            weapon is air waves
        fire
            damage: high + dmg to earth
            range: low
            rate: med
            high power damage with splash damage
            chance of leaving fire pit, which damages over time*/