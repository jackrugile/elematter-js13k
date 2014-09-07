/*==============================================================================

Game

==============================================================================*/

g.config = {
	namespace: 'elematter',
	width: 800,
	height: 600,
	size: 40,
	state: 'play'
};

g.init = function() {
	// setup overall game time
	g.time = new g.Time();

	// get overall css browser prefix
	//g.prefix = g.getPrefix();

	//g.prefixes = [ 'webkit', 'moz', 'ms', 'o' ];
	//g.prefixesLength = g.prefixes.length;

	g.prefixElement = document.createElement( 'div' );
	g.prefixMatches = {};

	// game dimensions
	g.size = g.config.size;
	g.width = g.config.width;
	g.height = g.config.height;
	g.ratio = g.height / g.width;
	g.cols = g.width / g.size;
	g.rows = g.height / g.size;
	g.scale = 1;

	// setup game element
	g.dom = g.qS( '.g' );
	g.css( g.dom, 'width', g.width + 'px' );
	g.css( g.dom, 'height', g.height + 'px' );

	// setup local storage
	g.storage = new g.Storage( g.config.namespace );

	// setup storage defaults if they don't exist
	if( g.isObjEmpty( g.storage.obj ) ) {
		// g.storage.set( 'option', 0 );
	}

	// set the initial state and get things going
	g.lastState = null;
	g.setState( g.config.state );
	g.step();

	// general events
	window.addEventListener( 'load', g.onLoad );
	g.dom.addEventListener( 'click', g.onClick );
	window.addEventListener( 'resize', g.onResize );
	g.onResize();
};

g.step = function() {
	// constant loop, regardless of state
	requestAnimationFrame( g.step );

	// tracks total game time
	g.time._step();

	// steps current state
	g.states[ g.state ]._step();

	// draws current state
	g.states[ g.state ]._draw();
};

g.onLoad = function() {
	g.addClass( g.dom, 'loaded' );
};

g.onClick = function( e ) {
	e.stopPropagation();
};

g.onResize = function() {
	// get window size
	g.winWidth = window.innerWidth;
	g.winHeight = window.innerHeight;
	g.winRatio = g.winHeight / g.winWidth;

	/*if( g.winRatio > g.ratio ) {
		g.scale = ( g.winWidth / g.width ) * 0.8;
	} else {
		g.scale = ( g.winHeight / g.height ) * 0.8;
	}
	g.scale = Math.max( g.scale, 1 );*/
	g.css( g.dom, 'transform', 'scale(' + g.scale + ')' );

	// center game
	g.css( g.dom, 'marginLeft', -g.width / 2 + 'px' );
	g.css( g.dom, 'marginTop', -g.height / 2 + 'px' );
};


g.init();