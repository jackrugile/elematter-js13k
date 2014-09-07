/*==============================================================================

Tower

==============================================================================*/

g.Tower = function( opt ) {
	g.merge( this, opt );
	this.init();
};

g.Tower.prototype.init = function() {
	this.setupDom();
	this.setupEvents();
};

g.Tower.prototype.step = function() {

};

g.Tower.prototype.draw = function() {

};

g.Tower.prototype.setupDom = function() {
	this.dom = {};
	this.dom.wrap   = g.cE( this.state.dom.state, 't-wrap t-type-' + this.type );
	this.dom.tower  = g.cE( this.dom.wrap, 't-tower' );
	this.dom.slab   = g.cE( this.dom.tower, 't-slab' );
	this.dom.turret = g.cE( this.dom.tower, 't-turret' );
	this.dom.base   = g.cE( this.dom.tower, 't-base' );
	this.dom.core   = g.cE( this.dom.tower, 't-core' );
	this.dom.range  = g.cE( this.dom.tower, 't-range' );

	g.css( this.dom.wrap, 'transform', 'translate(' + this.col * g.size + 'px , ' + this.row * g.size + 'px )', 1 );

	/*this.elem = document.createElement( 'div' );
	g.css( this.elem, 'transform', 'translate(' + this.col * g.size + 'px , ' + this.row * g.size + 'px )', 1 );
	g.css( this.elem, 'width', g.size + 'px' );
	g.css( this.elem, 'height', g.size + 'px' );
	g.css( this.elem, 'z-index', 100 );
	g.css( this.elem, 'position', 'absolute' );
	g.css( this.elem, 'background', 'blue' );
	this.state.dom.state.appendChild( this.elem );*/
};

g.Tower.prototype.setupEvents = function() {
	this.dom.wrap.addEventListener( 'click', this.onClick.bind( this ) );
};

g.Tower.prototype.onClick = function( e ) {
};