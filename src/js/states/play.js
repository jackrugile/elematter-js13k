/*==============================================================================

Play State

==============================================================================*/

var StatePlay = function(){};

StatePlay.prototype.init = function() {
	// get dom
	this.dom = document.querySelector( '.s-play' );

	// create tiles
	this.createTiles();
};

StatePlay.prototype.step = function() {
};

StatePlay.prototype.draw = function() {
};

StatePlay.prototype.exit = function() {
};

StatePlay.prototype.createTiles = function() {
	// create tiles
	this.baseTiles = [];
	this.pathTiles = [];
	for( var x = 0; x < g.cols; x++ ) {
		for( var y = 0; y < g.rows; y++ ) {

			var isPath = this.isPath( x, y );

			var tile = new g.Tile({
				state: this,
				col: x,
				row: y,
				isPath: isPath,
				classes: isPath ? [ 'path' ] : []
			});
			if( isPath ) {
				this.pathTiles.push( tile );
			} else {
				this.baseTiles.push( tile );
			}
		}
	}
};

StatePlay.prototype.isPath = function( x, y ) {
	var mapLength = g.data.map.length;
	for( var i = 0; i < mapLength - 1; i++ ) {
		var p1 = g.data.map[ i ],
			p2 = g.data.map[ i + 1 ],
			minX = Math.min( p1[ 0 ], p2[ 0 ] ),
			minY = Math.min( p1[ 1 ], p2[ 1 ] ),
			maxX = Math.max( p1[ 0 ], p2[ 0 ] ),
			maxY = Math.max( p1[ 1 ], p2[ 1 ] );
		if( x >= minX && x <= maxX && y >= minY && y <= maxY ) {
			return true;
		}
	}
};

g.addState( 'play', new StatePlay() );