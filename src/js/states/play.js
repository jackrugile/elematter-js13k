/*==============================================================================

Play State

==============================================================================*/

var StatePlay = function(){};

StatePlay.prototype.init = function() {

	// create tiles
	this.baseTiles = [];
	this.pathTiles = [];
	for( var x = 0; x < g.cols; x++ ) {
		for( var y = 0; y < g.rows; y++ ) {

			var isPath = this.isPath( x, y );

			var tile = new g.Tile({
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

	this.setPathDirections();

	// set direction for path tiles
	/*var length = this.pathTiles.length;
	console.log( length );
	for( var i = 0; i < length - 1; i++ ) {
		var dir = 'e',
			pCurr = this.pathTiles[ i ],
			pNext = this.pathTiles[ i + 1 ];
		if( pNext.col < pCurr.col ) {
			dir = 'w';
		} else if( pNext.row > pCurr.row ) {
			dir = 's';
		} else if( pNext.row < pCurr.row ) {
			dir = 'n';
		}
		pCurr.dir = dir;
	}*/

};

StatePlay.prototype.step = function() {
};

StatePlay.prototype.draw = function() {
};

StatePlay.prototype.exit = function() {
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

StatePlay.prototype.setPathDirections = function() {
	var mapLength = g.data.map.length,
		tempCol,
		tempRow;
	for( var i = 0; i < mapLength - 1; i++ ) {
		var pCurr = g.data.map[ i ],
			pNext = g.data.map[ i + 1 ],
			tempCol = pCurr[ 0 ],
			tempRow = pCurr[ 1 ],
			tempColLast,
			tempRowLast,
			dir;
		while( tempCol != pNext[ 0 ] || tempRow != pNext[ 1 ] ) {
			if( tempCol < pNext [ 0 ] ) {
				tempCol++;
				dir = 'e';
			} else if( tempCol > pNext[ 0 ] ) {
				tempCol--;
				dir = 'w';
			} else if( tempRow < pNext[ 1 ] ) {
				tempRow++;
				dir = 's';
			} else if( tempRow > pNext[ 1 ] ) {
				tempRow--;
				dir = 'n';
			}

			var pLength = this.pathTiles.length;
			for( var j = 0; j < pLength; j++ ) {
				var p = this.pathTiles[ j ];
				if( p.col == tempColLast && p.row == tempRowLast ) {
					p.setDir( dir );
					break;
				}
			}

			tempColLast = tempCol;
			tempRowLast = tempRow;

		}
		
	}
};

g.addState( 'play', new StatePlay() );