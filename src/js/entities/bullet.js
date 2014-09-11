/*==============================================================================

Bullet

==============================================================================*/

g.Bullet = function( opt ) {
	g.merge( this, opt );
	this.init();
};

g.Bullet.prototype.init = function() {
	this.guid = g.guid++;
	this.size = 6;
	this.radius = this.size / 2;
	this.x -= this.radius; // actual x
	this.y -= this.radius; // actual y
	this.cx = 0; // center x
	this.cy = 0; // center y
	this.rx = 0; // render x
	this.ry = 0; // render y
	this.vx = 0; // velocity x
	this.vy = 0; // velocity y
	this.dx = 0; // dist x to target
	this.dy = 0; // dist y to target
	this.dist = 0; // dist to target
	this.angle = 0; // angle to target
	this.accel = 0.1;
	this.speed = 0;
	//this.dom = g.cE( null, 'bullet type-' + this.type );
	this.dom = g.cE( this.state.dom.state, 'bullet type-' + this.type );
	this.updateCoords();
	g.css( this.dom, {
		'width': this.size + 'px',
		'height': this.size + 'px',
		'transform': 'translate3d(' + this.rx + 'px , ' + this.ry + 'px, 0)'
	});
};

g.Bullet.prototype.step = function() {
	if( this.state.isPlaying ) {
		var target = this.state.enemies.getByPropVal( 'guid', this.target );
		if( target ) {
			this.dx = target.cx - this.cx;
			this.dy = target.cy - this.cy;
			this.dist = Math.sqrt( this.dx * this.dx + this.dy * this.dy );
			this.angle = Math.atan2( this.dy, this.dx );
			this.vx = Math.cos( this.angle ) * this.speed;
			this.vy = Math.sin( this.angle ) * this.speed;
			this.speed += this.accel;

			if( Math.abs( this.dist ) > this.speed ) {
				this.x += this.vx;
				this.y += this.vy;
			} else {
				this.destroy();
			}
		} else {
			this.destroy();
		}
	}

	this.updateCoords();
};

g.Bullet.prototype.draw = function() {
	g.css( this.dom, 'transform', 'translate3d(' + this.rx + 'px , ' + this.ry + 'px, 0) rotate(' + ( this.angle + Math.PI / 4 ) + 'rad)' );
};

g.Bullet.prototype.activate = function() {
	this.state.dom.state.appendChild( this.dom );
};

g.Bullet.prototype.destroy = function() {
	this.state.bullets.remove( this );
	this.state.dom.state.removeChild( this.dom );
};

g.Bullet.prototype.updateCoords = function() {
	this.cx = this.x + this.size / 2;
	this.cy = this.y + this.size / 2;
	this.rx = this.x;
	this.ry = this.y;
};