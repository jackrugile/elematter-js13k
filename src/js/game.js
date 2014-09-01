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
	g.prefix = g.getPrefix();

	// game dimensions
	g.size = g.config.size;
	g.width = g.config.width;
	g.height = g.config.height;
	g.ratio = g.height / g.width;
	g.cols = g.width / g.size;
	g.rows = g.height / g.size;
	g.scale = 1;

	// setup game element
	g.dom = document.getElementById( 'g' );
	g.dom.style.width = g.width + 'px';
	g.dom.style.height = g.height + 'px';

	// setup local storage
	g.storage = new g.Storage( g.config.namespace );

	// setup storage defaults if they don't exist
	if( g.objIsEmpty( g.storage.obj ) ) {
		// g.storage.set( 'option', 0 );
	}

	// set the initial state and get things going
	g.lastState = null;
	g.setState( g.config.state );
	g.step();

	// resize
	window.addEventListener( 'resize', g.onresize );
	g.onresize();
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

g.onresize = function() {
	// get window size
	g.winWidth = window.innerWidth;
	g.winHeight = window.innerHeight;
	g.winRatio = g.winHeight / g.winWidth;

	/*if( g.winRatio > g.ratio ) {
		g.scale = ( g.winWidth / g.width ) * 0.8;
	} else {
		g.scale = ( g.winHeight / g.height ) * 0.8;
	}
	g.scale = Math.max( g.scale, 1 );
	g.css( g.dom, 'transform', 'scale(' + g.scale + ')', 1 );*/

	// center game
	g.css( g.dom, 'margin-left', -g.width / 2 + 'px' );
	g.css( g.dom, 'margin-top', -g.height / 2 + 'px' );
};

g.init();