/*==============================================================================

Play State

==============================================================================*/

var StatePlay = function(){};

/*==============================================================================

Base State Functions

==============================================================================*/

StatePlay.prototype.init = function() {
	// state vars
	this.fragments = 1000;
	this.fragmentsDisplay = this.fragments;
	this.fragmentsDisplayLast = 0;
	this.fragmentsChangeFlag = 0;
	this.lastClickedTile = null;
	this.globalSlabRotation = 0;
	this.globalTurretRotation = 0;
	this.globalCoreScale = 1;
	this.towers = new g.Group();

	// general booleans
	this.isBuildMenuOpen = 0;
	this.isBuildable = 0;

	// setup dom
	this.dom = {};

	// get state dom
	this.dom.state = g.qS( '.s-play' );

	// get ui dom
	this.dom.fragments = g.qS( '.d-fragments' );

	// get build menu dom
	this.dom.buildMenuWrap = g.qS( '.build-menu-wrap' );
	this.dom.buildMenu     = g.qS( '.build-menu' );
	this.dom.buildSelect   = g.qS( '.build-select' );
	this.dom.buildDefault  = g.qS( '.build-d' );
	this.dom.buildEarth    = g.qS( '.build-e' );
	this.dom.buildWater    = g.qS( '.build-w' );
	this.dom.buildAir      = g.qS( '.build-a' );
	this.dom.buildFire     = g.qS( '.build-f' );
	this.dom.buildCost     = g.qS( '.build-cost' );
	this.dom.buildType     = g.qS( '.build-type' );
	this.dom.buildDesc     = g.qS( '.build-desc' );
	this.dom.buildDamage   = g.qS( '.build-damage' );
	this.dom.buildRange    = g.qS( '.build-range' );
	this.dom.buildRate     = g.qS( '.build-rate' );

	// set build menu events
	this.dom.buildMenuWrap.addEventListener( 'click', this.onBuildMenuWrapClick.bind( this ) );
	this.dom.buildMenu.addEventListener( 'click', this.onBuildMenuClick.bind( this ) );
	for( var i = 0, length =  this.dom.buildSelect.length; i < length; i++ ) {
		this.dom.buildSelect[ i ].addEventListener( 'mouseenter', this.onBuildSelectMouseenter.bind( this ) );
		this.dom.buildSelect[ i ].addEventListener( 'mouseleave', this.onBuildSelectMouseleave.bind( this ) );
		this.dom.buildSelect[ i ].addEventListener( 'click', this.onBuildSelectClick.bind( this ) );
	}

	// set general events
	window.addEventListener( 'click', this.onWinClick.bind( this ) );

	// create tiles
	this.createTiles();
};

StatePlay.prototype.step = function() {
	// update global properties
	this.updateGlobals();

	// towers
	this.towers.each( 'step' );
	this.towers.each( 'draw' );

	// update fragments
	this.updateFragments();
	this.fragmentsChangeFlag = 0;
};

StatePlay.prototype.draw = function() {
};

StatePlay.prototype.exit = function() {
};

/*==============================================================================

General Events

==============================================================================*/

StatePlay.prototype.onWinClick = function() {
	// if the area outside of the game is clicked
	// and the build menu is open, hide it
	if( this.isBuildMenuOpen ) {
		this.hideBuildMenu();
	}
};

/*==============================================================================

Map/Tile Generation

==============================================================================*/

StatePlay.prototype.createTiles = function() {
	// create a full grid of tiles, broken up into two separate arrays
	// they can be base or be path
	this.baseTiles = new g.Group();
	this.pathTiles = new g.Group();
	for( var x = 0; x < g.cols; x++ ) {
		for( var y = 0; y < g.rows; y++ ) {
			var isPath = this.isPath( x, y ),
				classes = [ 'tile' ];
			if( isPath ) {
				classes += ' path';
			}
			var tile = new g.Tile({
				state: this,
				col: x,
				row: y,
				isPath: isPath || 0,
				classes: classes,
				horizontal: x > g.cols / 2 ? 'e' : 'w',
				vertical: y > g.rows / 2 ? 's' : 'n'
			});
			if( isPath ) {
				this.pathTiles.add( tile );
			} else {
				this.baseTiles.add( tile );
			}
		}
	}
};

StatePlay.prototype.isPath = function( x, y ) {
	// based on the map waypoint data
	// determine whether a tile is a base tile or a path tile
	var mapLength = g.data.map.length;
	for( var i = 0; i < mapLength - 1; i++ ) {
		var p1 = g.data.map[ i ],
			p2 = g.data.map[ i + 1 ],
			minX = Math.min( p1[ 0 ], p2[ 0 ] ),
			minY = Math.min( p1[ 1 ], p2[ 1 ] ),
			maxX = Math.max( p1[ 0 ], p2[ 0 ] ),
			maxY = Math.max( p1[ 1 ], p2[ 1 ] );
		if( x >= minX && x <= maxX && y >= minY && y <= maxY ) { return 1; }
	}
};

/*==============================================================================

Globals

==============================================================================*/

StatePlay.prototype.updateGlobals = function() {
	this.globalSlabRotation -= 0.025;
	this.globalTurretRotation += 0.025;
	//0.1
	//0.4
	this.globalCoreScale = 0.3 + Math.sin( this.time.tick / 30 ) * 0.15;
};

/*==============================================================================

Fragments / Cash / Spending / Money / Currency

==============================================================================*/

StatePlay.prototype.setFragments = function( amt ) {
	this.fragments += amt;
	this.fragmentsChangeFlag = 1;
};

StatePlay.prototype.updateFragments = function() {
	this.fragmentsDisplay += ( this.fragments - this.fragmentsDisplay ) * 0.2;
	if( Math.round( this.fragmentsDisplay ) != Math.round( this.fragmentsDisplayLast ) ) {
		g.text( this.dom.fragments, g.formatCommas( this.fragmentsDisplay ) );
	}
	this.fragmentsDisplayLast = this.fragmentsDisplay;
};

/*==============================================================================

Build Menu

==============================================================================*/

StatePlay.prototype.showBuildMenu = function( tile ) {
	//console.log( tile );
	this.isBuildMenuOpen = 1;
	this.isBuildable = 1;
	g.addClass( g.dom, 'build-menu-open' );

	// set the proper positioning to prevent overflow of main game wrap
	g.removeClass( g.dom, 'pos-n pos-e pos-s pos-w' );
	g.addClass( g.dom, 'pos-' + tile.horizontal + ' ' + 'pos-' + tile.vertical );

	// determine proper coordinates
	var x = tile.col * g.size - 20,
		y = tile.row * g.size - 20;

	if( tile.horizontal == 'e' ) {
		x -= 200;
	}

	// set position based on tile
	g.css( this.dom.buildMenu, 'transform', 'translateX(' + x + 'px) translateY(' + y + 'px)' );

	// reset anim on pulsing default box
	g.resetAnim( this.dom.buildDefault );
};

StatePlay.prototype.hideBuildMenu = function() {
	this.isBuildMenuOpen = 0;
	g.removeClass( g.dom, 'build-menu-open' );
};

StatePlay.prototype.updateBuildMenuText = function( type ) {
	// get the tower data based on type
	var data = g.data.towers[ type ];
	// set all text nodes
	g.text( this.dom.buildCost, data.stats[ 0 ].cost );
	g.text( this.dom.buildType, data.title );
	g.text( this.dom.buildDesc, data.desc );
	g.text( this.dom.buildDamage, data.damage + ' ' + data.bonus );
	g.text( this.dom.buildRange, data.range );
	g.text( this.dom.buildRate, data.rate );
	// reset classes and add proper type classes based on tower data
	g.removeClass( g.dom, 'hover-e hover-w hover-a hover-f' );
	g.addClass( g.dom, 'hover-build-select hover-' + type );
	g.removeClass( g.dom, 'dmg1 dmg2 dmg3 rng1 rng2 rng3 rte1 rte2 rte3' );

	// default to 1, or "low"
	var meterDmg = 1,
		meterRng = 1,
		meterRte = 1;

	// get meter values based on keyword descriptions
	if( data.damage == 'Medium' ) {
		meterDmg = 2;
	} else if( data.damage == 'High' ) {
		meterDmg = 3;
	}
	if( data.range == 'Medium' ) {
		meterRng = 2;
	} else if( data.range == 'High' ) {
		meterRng = 3;
	}
	if( data.rate == 'Medium' ) {
		meterRte = 2;
	} else if( data.rate == 'High' ) {
		meterRte = 3;
	}

	// set classes based on meter values
	g.addClass( g.dom, 'dmg' + meterDmg );
	g.addClass( g.dom, 'rng' + meterRng );
	g.addClass( g.dom, 'rte' + meterRte );
};

StatePlay.prototype.onBuildMenuWrapClick = function( e ) {
	// if the outer wrap is clicked, close the build menu
	this.hideBuildMenu();
};

StatePlay.prototype.onBuildMenuClick = function( e ) {
	// prevent any clicks from bubbling up to any other tiles or buttons
	e.stopPropagation();
};

StatePlay.prototype.onBuildSelectMouseenter = function( e ) {
	// set the build menu text based on the element that is hovered
	var type = g.attr( e.target, 'data-type' );
	if( type ) {
		this.updateBuildMenuText( type );
	}
};

StatePlay.prototype.onBuildSelectMouseleave = function( e ) {
	// remove hover class, which fades out the description
	g.removeClass( g.dom, 'hover-build-select' );
};

StatePlay.prototype.onBuildSelectClick = function( e ) {
	// set the build menu text based on the element that is hovered
	var type = g.attr( e.target, 'data-type' );
	if( type ) {
		var cost = g.data.towers[ type ].stats[ 0 ].cost;
		if( cost <= this.fragments && this.isBuildable ) {
			this.setFragments( -cost );
			var tile = this.lastClickedTile;
			var tower = new g.Tower({
				state: this,
				col: tile.col,
				row: tile.row,
				type: type
			});
			this.towers.add( tower );
			this.isBuildable = 0;
			this.hideBuildMenu();
		}
	}
};

/*==============================================================================

Add State

==============================================================================*/

g.addState( 'play', new StatePlay() );