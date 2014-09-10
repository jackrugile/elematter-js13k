/*==============================================================================

Enemy

==============================================================================*/

g.Enemy = function( opt ) {
	g.merge( this, opt );
	this.init();
};

g.Enemy.prototype.init = function() {
	this.hp = 1; // hit points
	this.wp = 1; // current waypoint index
	this.size = 16;
	this.x = g.data.map[ 0 ][ 0 ] * g.size; // actual x
	this.y = g.data.map[ 0 ][ 1 ] * g.size; // actual y
	this.xr = 0; // render x
	this.yr = 0; // render y
	this.vx = 0; // velocity x
	this.vy = 0; // velocity y
	this.dx = 0; // dist x to waypoint
	this.dy = 0; // dist y to waypoint
	this.dist = 0; // dist to waypoint
	this.angle = 0; // angle to waypoint
	this.rotation = 0;
	this.speed = 1;
	this.tick = 0;
	this.dom = g.cE( null, 'enemy type-' + this.type );
	this.updateRenderCoords();
	g.css( this.dom, {
		'width': this.size + 'px',
		'height': this.size + 'px',
		'transform': 'translate3d(' + this.xr + 'px , ' + this.yr + 'px, 0)'
	});
};

g.Enemy.prototype.step = function() {
	if( this.state.isPlaying ) {
		var wp = g.data.map[ this.wp ];
		this.dx = ( wp[ 0 ] * g.size ) - this.x;
		this.dy = ( wp[ 1 ] * g.size ) - this.y;
		this.dist = Math.sqrt( this.dx * this.dx + this.dy * this.dy );
		this.angle = Math.atan2( this.dy, this.dx );
		this.vx = Math.cos( this.angle ) * this.speed;
		this.vy = Math.sin( this.angle ) * this.speed;

		if( Math.abs( this.dist ) > this.speed ) {
			this.x += this.vx;
			this.y += this.vy;
		} else {
			this.x = wp[ 0 ] * g.size;
			this.y = wp[ 1 ] * g.size;
			if( this.wp + 1 >= g.data.map.length ) {
				this.destroy();
				this.state.lives--;
			} else {
				this.wp++;
			}
		}
		this.tick++;


		var dx = this.dx,
			dy = this.dy;
		dx /= this.dist ? this.dist : 1.0; dy /= this.dist ? this.dist : 1.0;
		// get current direction
		var dirx = Math.cos(this.rotation),
		diry = Math.sin(this.rotation);
		// ease the current direction to the target direction
		dirx += (dx - dirx) * 0.15;
		diry += (dy - diry) * 0.15;

		this.rotation = Math.atan2( diry, dirx );
		var targetRotation = Math.atan2( dy, dx );





	}

	this.updateRenderCoords();
};

g.Enemy.prototype.draw = function() {
	//g.css( this.dom, 'transform', 'translate3d(' + this.xr + 'px , ' + this.yr + 'px, 0) rotate(' + ( this.angle + Math.PI / 4 + Math.PI ) + 'rad)' );
	g.css( this.dom, 'transform', 'translate3d(' + this.xr + 'px , ' + this.yr + 'px, 0) rotate(' + ( this.rotation + Math.PI / 4 - Math.PI ) + 'rad)' );
};

g.Enemy.prototype.activate = function() {
	this.state.dom.state.appendChild( this.dom );
};

g.Enemy.prototype.destroy = function() {
	this.state.enemies.remove( this );
	this.state.dom.state.removeChild( this.dom );
};

g.Enemy.prototype.updateRenderCoords = function() {
	this.xr = this.x + g.size / 2 - this.size / 2;
	this.yr = this.y + g.size / 2 - this.size / 2;
};