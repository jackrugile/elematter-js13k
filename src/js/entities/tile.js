/*==============================================================================

Tile

==============================================================================*/

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
	g.css( this.elem, 'left', this.col * g.size + 'px' );
	g.css( this.elem, 'top', this.row * g.size + 'px' );
	g.css( this.elem, 'width', g.size + 'px' );
	g.css( this.elem, 'height', g.size + 'px' );
	g.dom.appendChild( this.elem );
};

g.Tile.prototype.step = function() {

};

g.Tile.prototype.draw = function() {

};