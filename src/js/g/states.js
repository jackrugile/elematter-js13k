/*==============================================================================

States

==============================================================================*/

g.states = {};

g.addState = function( name, state ) {
	g.states[ name ] = new g.State( state );
};

g.setState = function( name ) {
	if( g.state ) {
		g.prevState = g.currentState();
		g.states[ g.state ]._exit();
	}
	g.state = name;
	g.states[ g.state ]._init();
};

g.currentState = function() {
	return g.states[ g.state ];
};