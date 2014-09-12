/*==============================================================================

Game

==============================================================================*/

g.init = function() {
	// setup overall game time
	//g.time = new g.Time();

	// for unique ids
	g.guid = 0;

	// game dimensions
	g.size = 40;
	g.width = 800;
	g.height = 600;
	g.ratio = g.height / g.width;
	g.cols = g.width / g.size;
	g.rows = g.height / g.size;
	//g.scale = 1;

	// setup game element
	g.dom = g.qS( '.g' );
	g.css( g.dom, {
		'width': g.width + 'px',
		'height': g.height + 'px'
	});

	// setup local storage
	g.storage = new g.Storage( 'elematterjs13k' );

	// setup storage defaults if they don't exist
	//if( g.isObjEmpty( g.storage.obj ) ) {
		// g.storage.set( 'option', 0 );
	//}

	// set the initial state and get things going
	g.lastState = null;
	g.setState( 'play' );
	g.step();

	// general events
	g.on( window, 'load', g.onLoad );
	g.on( g.dom, 'click', g.onClick );
	g.on( window, 'resize', g.onResize );
	g.onResize();
};

g.step = function() {
	// constant loop, regardless of state
	requestAnimationFrame( g.step );

	// tracks total game time
	//g.time._step();

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
	g.css( g.dom, {
		'marginLeft': -g.width / 2 + 'px',
		'marginTop': -g.height / 2 + 'px'
	});
};

g.init();