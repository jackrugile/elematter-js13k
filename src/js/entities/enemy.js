/*==============================================================================

Enemy

==============================================================================*/

g.Enemy = function( opt ) {
	g.merge( this, opt );
	this.init();
};

g.Enemy.prototype.init = function() {
};

g.Enemy.prototype.step = function() {
};

g.Enemy.prototype.draw = function() {
};

g.Enemy.prototype.setupDom = function() {
	this.dom = {};
	this.dom.wrap   = g.cE( this.state.dom.state, 't-wrap t-type-' + this.type );
	this.dom.tower  = g.cE( this.dom.wrap, 't-tower' );
	this.dom.slab   = g.cE( this.dom.tower, 't-slab' );
	this.dom.turret = g.cE( this.dom.tower, 't-turret' );
	this.dom.base   = g.cE( this.dom.tower, 't-base' );
	this.dom.core   = g.cE( this.dom.tower, 't-core' );
	this.dom.range  = g.cE( this.dom.tower, 't-range' );
	g.css( this.dom.wrap, 'transform', 'translate(' + this.col * g.size + 'px , ' + this.row * g.size + 'px )', 1 );
};