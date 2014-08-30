/*==============================================================================

Pool

==============================================================================*/

g.Pool = function( base, preallocateAmount ) {
	this.base = base;
	this.preallocateAmount = preallocateAmount || 0;
	this.alive = [];
	this.dead = [];
	this.length = 0;
	this.deadLength = 0;
	if( this.preallocateAmount ) {
		this.preallocate();
	}
};

g.Pool.prototype.preallocate = function() {
	for( var i = 0; i < this.preallocateAmount; i++ ) {
		this.dead.push( new this.base() );
		this.deadLength++;
	}
};

g.Pool.prototype.create = function( opt ) {
	if( this.deadLength ) {
		var obj = this.dead.pop();
		obj.init( opt );
		this.alive.push( obj );
		this.deadLength--;
		this.length++;
	} else {
		this.alive.push( new this.base( opt ) );
		this.length++;
	}
};

g.Pool.prototype.release = function( obj ) {
	var i = this.alive.indexOf( obj );
	if( i > -1 ) {
		this.dead.push( this.alive.splice( i, 1 )[ 0 ] );
		this.length--;
		this.deadLength++;
	}
};

g.Pool.prototype.empty = function() {
	this.alive.length = 0;
	this.dead.length = 0;
	this.length = 0;
	this.deadLength = 0;
};

g.Pool.prototype.each = function( action, asc ) {
	var i;
	if( asc ) {
		for( i = 0; i < this.length; i++ ) {
			this.alive[ i ][ action ]( i );
		}
	} else {
		i = this.length;
		while( i-- ) {
			this.alive[ i ][ action ]( i );
		}
	}
};