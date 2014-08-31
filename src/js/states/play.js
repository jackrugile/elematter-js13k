/*==============================================================================

Play State

==============================================================================*/

var StatePlay = function(){};

StatePlay.prototype.init = function() {

	// create base tiles
	var tile = new g.Tile({
		col: 7,
		row: 3,
		classes: []
	});

};

StatePlay.prototype.step = function() {
};

StatePlay.prototype.draw = function() {
};

StatePlay.prototype.exit = function() {
};

g.addState( 'play', new StatePlay() );