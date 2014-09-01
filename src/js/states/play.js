/*==============================================================================

Play State

==============================================================================*/

var StatePlay = function(){};

StatePlay.prototype.init = function() {

	// create base tiles
	for( var x = 0; x < g.cols; x++ ) {
		for( var y = 0; y < g.rows; y++ ) {

			var classy = this.isPath( x, y ) ? 'path' : '';

			var tile = new g.Tile({
				col: x,
				row: y,
				classes: [ classy ]
			});
		}
	}

};

StatePlay.prototype.step = function() {
};

StatePlay.prototype.draw = function() {
};

StatePlay.prototype.exit = function() {
};

StatePlay.prototype.isPath = function( x, y ) {
	var mapLength = g.data.map.length;
	for( var i = 0; i < mapLength; i++ ) {
		var p1 = g.data.map[ i ],
			p2 = i < mapLength - 1 ? g.data.map[ i + 1 ] : p1,
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