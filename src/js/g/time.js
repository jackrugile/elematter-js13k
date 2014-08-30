/*==============================================================================

Time

==============================================================================*/

g.Time = function() {
	this._init();
};

g.Time.prototype._init = function() {
	this.now = Date.now();
	this.last = Date.now();
	this.delta = 16;
	this.ndelta = 1;
	this.elapsed = 0;
	this.nelapsed = 0;
	this.tick = 0;
};

g.Time.prototype._step = function() {
	this.now = Date.now();
	this.delta = this.now - this.last;
	this.ndelta = Math.min( Math.max( this.delta / ( 1000 / 60 ), 0.0001 ), 10 );
	this.elapsed += this.delta;
	this.nelapsed += this.ndelta;
	this.last = this.now;
	this.tick++;
};