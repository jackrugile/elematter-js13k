/*==============================================================================

State

==============================================================================*/

g.State = function( state ) {
	g.merge( this, state );
	this.init = g.isset( this.init ) ? this.init : function(){};
	this.step = g.isset( this.step ) ? this.step : function(){};
	this.draw = g.isset( this.draw ) ? this.draw : function(){};
	this.exit = g.isset( this.exit ) ? this.exit : function(){};
};

g.State.prototype._init = function() {
	this.time = new g.Time();
	this.init();
};

g.State.prototype._step = function() {
	this.time._step();
	this.step();
};

g.State.prototype._draw = function() {
	this.draw();
};

g.State.prototype._exit = function() {
	this.exit();
};