/*==============================================================================

Tile

==============================================================================*/

// used for map gen
//var map = [];

g.Tile = function( opt ) {
	g.merge( this, opt );
	// col
	// row
	// classes ( path, etc. )
	this.init();
};

g.Tile.prototype.init = function() {
	this.elem = document.createElement( 'div' );
	this.elem.className = 'tile ' + this.classes.join( ' ' );
	g.css( this.elem, 'transform', 'translate(' + this.col * g.size + 'px , ' + this.row * g.size + 'px )' );
	g.css( this.elem, 'width', g.size + 'px' );
	g.css( this.elem, 'height', g.size + 'px' );
	g.css( this.elem, 'z-index', g.rows - this.row );
	this.state.dom.appendChild( this.elem );

	// bind events
	this.elem.addEventListener( 'click', this.onclick.bind( this ) );
};

g.Tile.prototype.step = function() {

};

g.Tile.prototype.draw = function() {

};

g.Tile.prototype.onclick = function() {
	// used for map gen
	//this.elem.className += ' path';
	//map.push( [ this.col, this.row ] );
	//console.log( JSON.stringify(map) );
};