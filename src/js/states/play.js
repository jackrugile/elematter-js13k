/*==============================================================================

Play State

==============================================================================*/

var StatePlay = function(){};

/*==============================================================================

Base State Functions

==============================================================================*/

StatePlay.prototype.init = function() {
	// general booleans
	this.isBuildMenuOpen = 0;

	// setup dom
	this.dom = {};

	// get state dom
	this.dom.state = g.qS( '.s-play' );

	// get build menu dom
	this.dom.buildMenuWrap = g.qS( '.build-menu-wrap' );
	this.dom.buildMenu     = g.qS( '.build-menu' );
	this.dom.buildDefault  = g.qS( '.build-d' );
	this.dom.buildEarth    = g.qS( '.build-e' );
	this.dom.buildWater    = g.qS( '.build-w' );
	this.dom.buildAir      = g.qS( '.build-a' );
	this.dom.buildFire     = g.qS( '.build-f' );
	this.dom.buildTitle    = g.qS( '.build-title' );
	this.dom.buildType     = g.qS( '.build-type' );
	this.dom.buildCost     = g.qS( '.build-cost' );
	this.dom.buildDamage   = g.qS( '.build-damage' );
	this.dom.buildRange    = g.qS( '.build-range' );
	this.dom.buildRate     = g.qS( '.build-rate' );


	// set build menu events
	this.dom.buildMenuWrap.addEventListener( 'click', this.onBuildMenuWrapClick.bind( this ) );
	this.dom.buildMenu.addEventListener( 'click', this.onBuildMenuClick.bind( this ) );

	// create tiles
	this.createTiles();
};

StatePlay.prototype.step = function() {
};

StatePlay.prototype.draw = function() {
};

StatePlay.prototype.exit = function() {
};

/*==============================================================================

Map/Tile Generation

==============================================================================*/

StatePlay.prototype.createTiles = function() {
	// create a full grid of tiles, broken up into two separate arrays
	// they can be base or be path
	this.baseTiles = [];
	this.pathTiles = [];
	for( var x = 0; x < g.cols; x++ ) {
		for( var y = 0; y < g.rows; y++ ) {
			var isPath = this.isPath( x, y );
			var tile = new g.Tile({
				state: this,
				col: x,
				row: y,
				isPath: isPath || 0,
				classes: isPath ? [ 'path' ] : [],
				horizontal: x > g.cols / 2 ? 'e' : 'w',
				vertical: y > g.rows / 2 ? 's' : 'n'
			});
			if( isPath ) {
				this.pathTiles.push( tile );
			} else {
				this.baseTiles.push( tile );
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

Build Menu

==============================================================================*/

StatePlay.prototype.showBuildMenu = function( tile ) {
	console.log( tile );
	this.isBuildMenuOpen = 1;
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

	if( tile.vertical == 's' ) {
		//y -= 300;
	}

	// set position based on tile
	g.css( this.dom.buildMenu, 'transform', 'translateX(' + x + 'px) translateY(' + y + 'px)', 1 );
};

StatePlay.prototype.hideBuildMenu = function() {
	this.isBuildMenuOpen = 0;
	g.removeClass( g.dom, 'build-menu-open' );
};

StatePlay.prototype.onBuildMenuWrapClick = function( e ) {
	this.hideBuildMenu();
};

StatePlay.prototype.onBuildMenuClick = function( e ) {
	e.stopPropagation();
};


/*==============================================================================

Add State

==============================================================================*/

g.addState( 'play', new StatePlay() );