/*==============================================================================

Group

==============================================================================*/

g.Group = function() {
	this.collection = [];
	this.length = 0;
};

g.Group.prototype.add = function( item ) {
	this.collection.push( item );
	this.length++;
};

g.Group.prototype.remove = function( index ) {
	if( index < this.length ) {
		this.collection.splice( index, 1 );
		this.length--;
	}
};

g.Group.prototype.empty = function() {
	this.collection.length = 0;
	this.length = 0;
};

g.Group.prototype.each = function( action, asc ) {
	var i;
	if( asc ) {
		for( i = 0; i < this.length; i++ ) {
			this.collection[ i ][ action ]( i );
		}
	} else {
		i = this.length;
		while( i-- ) {
			this.collection[ i ][ action ]( i );
		}
	}
};