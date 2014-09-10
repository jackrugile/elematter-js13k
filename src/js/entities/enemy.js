/*==============================================================================

Enemy

==============================================================================*/

g.Enemy = function( opt ) {
	g.merge( this, opt );
	this.init();
};

g.Enemy.prototype.init = function() {
	this.x = 10 * g.size;
	this.y = 10 * g.size;
	this.size = 20;
	this.dom = g.cE( this.state.dom.state, 'enemy type-' + this.type );
	g.css( this.dom, {
		'width': this.size + 'px',
		'height': this.size + 'px'
	});
};

g.Enemy.prototype.step = function() {
	if( this.state.isPlaying ) {
		this.x += 1;
	}

	if( this.x > g.size * g.cols ) {
		this.destroy();
	}
};

g.Enemy.prototype.draw = function() {
	g.css( this.dom, 'transform', 'translate(' + this.x + 'px , ' + this.y + 'px )');
};

g.Enemy.prototype.destroy = function() {
	this.state.enemies.remove( this );
	this.state.dom.state.removeChild( this.dom );
};