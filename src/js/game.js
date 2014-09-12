/*==============================================================================

Game

==============================================================================*/

g.init = function() {
	// for unique ids
	g.guid = 0;

	// game dimensions
	g.size = 40;
	g.width = 800;
	g.height = 600;
	g.cols = g.width / g.size;
	g.rows = g.height / g.size;

	// setup game element
	g.dom = g.qS( '.g' );
	g.css( g.dom, {
		'width': g.width + 'px',
		'height': g.height + 'px'
	});

	// setup local storage
	//g.storage = new g.Storage( 'elematterjs13k' );
	// setup storage defaults if they don't exist
	//if( g.isObjEmpty( g.storage.obj ) ) {
		// g.storage.set( 'option', 0 );
	//}

	g.on( window, 'load', g.onLoad );
	g.on( g.dom, 'click', g.onClick );

	g.play = new StatePlay();
	g.play.init();
	g.step();
};

g.step = function() {
	requestAnimationFrame( g.step );
	g.play.step();
	g.play.draw();
};

g.onLoad = function() {
	g.addClass( g.dom, 'loaded' );
};

g.onClick = function( e ) {
	e.stopPropagation();
};

g.init();