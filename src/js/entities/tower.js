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

	this.slabRotation = this.state.globalSlabRotation;
	this.turretRotation = this.state.globalTurretRotation;
	this.coreScale = this.state.globalCoreScale;
};

g.Tower.prototype.step = function() {
	this.slabRotation += ( this.state.globalSlabRotation - this.slabRotation ) * 0.2;
	this.turretRotation += ( this.state.globalTurretRotation - this.turretRotation ) * 0.2;
	this.coreScale += ( this.state.globalCoreScale - this.coreScale ) * 0.2;
	if( this.state.isPlaying ) {

	}
};

g.Tower.prototype.draw = function() {
	g.css( this.dom.slab, 'transform', 'rotate(' + this.slabRotation + 'rad)' );
	g.css( this.dom.turret, 'transform', 'rotate(' + this.turretRotation + 'rad)' );
	g.css( this.dom.core, 'transform', 'scale(' + this.coreScale + ')' );
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
	g.css( this.dom.wrap, 'transform', 'translate3d(' + this.col * g.size + 'px , ' + this.row * g.size + 'px, 0 )');
};

g.Tower.prototype.setupEvents = function() {
	g.on( this.dom.wrap, 'click', this.onClick, this );
};

g.Tower.prototype.onClick = function() {
	console.log( 'click' );
};