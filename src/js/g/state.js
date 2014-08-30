/*==============================================================================

State

==============================================================================*/

g.State = function( state ) {
	g.util.merge( this, state );
	this.init = g.util.isset( this.init ) ? this.init : function(){};
	this.step = g.util.isset( this.step ) ? this.step : function(){};
	this.draw = g.util.isset( this.draw ) ? this.draw : function(){};
	this.exit = g.util.isset( this.exit ) ? this.exit : function(){};
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