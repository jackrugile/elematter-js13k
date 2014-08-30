/*==============================================================================

Game

==============================================================================*/

g.config = {
	namespace: 'gameName',
	width: 800,
	height: 600,
	state: 'splash'
};

g._init = function() {
	// setup overall game time
	g.time = new g.Time();

	// setup canvas
	g.dom = document.getElementById( 'g' );
	g.c = document.createElement( 'canvas' );
	g.ctx = g.c.getContext( '2d' );
	g.c.width = g.width = g.config.width;
	g.c.height = g.height = g.config.height;
	g.dom.style.width = g.width + 'px';
	g.dom.style.height = g.height + 'px';
	g.dom.appendChild( g.c );

	// setup local storage
	g.storage = new g.Storage( g.config.namespace );

	// setup storage defaults if they don't exist
	if( g.util.objIsEmpty( g.storage.obj ) ) {
		g.storage.set( 'option', 0 );
	}

	// set the initial state and get things going
	g.lastState = null;
	g.setState( g.config.state );
	g._step();
};

g._step = function() {
	// constant loop, regardless of state
	requestAnimationFrame( g._step );

	// tracks total game time
	g.time._step();

	// steps current state
	g.states[ g.state ]._step();

	// draws current state
	g.states[ g.state ]._draw();
};

g._init();