/*==============================================================================

Wave

==============================================================================*/

g.Wave = function( opt ) {
	g.merge( this, opt );
	this.init();
};

g.Wave.prototype.init = function() {
	this.tick = 0;
	this.tickMax = 50 - this.num;
	this.enemies = new g.Group();
	this.counts = {
		e: 0,
		w: 0,
		a: 0,
		f: 0
	};
};

g.Wave.prototype.step = function() {
	if( this.state.isPlaying ) {
		if( this.tick >= this.tickMax && this.enemies.length ) {
			this.tick = 0;
			var enemy = this.enemies.shift();
			enemy.activate();
			this.state.enemies.push( enemy );
		} else {
			this.tick++;
		}
	}
};

/*g.Wave.prototype.draw = function() {
};*/