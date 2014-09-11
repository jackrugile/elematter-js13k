/*==============================================================================

Waves

==============================================================================*/



g.data.waves = [
	[ // Wave 1
		[ 'e', 1 ]
	],
	[ // Wave 2
		[ 'e', 8 ],
		[ 'w', 2 ]
	], 
	[ // Wave 3
		[ 'e', 6 ],
		[ 'w', 2 ],
		[ 'a', 2 ]
	],
	[ // Wave 4
		[ 'e', 4 ],
		[ 'w', 2 ],
		[ 'a', 2 ],
		[ 'f', 2 ]
	],
	[ // Wave 5 - Earth Boss
		[ 'e', 1, 1 ],
		[ 'e', 3 ],
		[ 'w', 3 ],
		[ 'a', 3 ],
		[ 'f', 3 ]
	]

];

/*

Earth
	HP - Med
	Speed - Med

Water
	HP - Med
	Speed - Med

Air
	HP - Low
	Speed - High

Fire
	HP - High
	Speed - Low

amount and configuration is drawn out by hand
the increase of HP and speed is based on the wave
amount, HP, and speed modified by difficulty setting

boss every 5 waves


*/