/*==============================================================================

Splash State

==============================================================================*/

var StateSplash = function(){};

StateSplash.prototype.init = function() {
};

StateSplash.prototype.step = function() {
};

StateSplash.prototype.draw = function() {
	g.ctx.fillStyle = '#fff';
	g.ctx.fillRect( 100, 100, 100, 100 );
};

StateSplash.prototype.exit = function() {
};

g.addState( 'splash', new StateSplash() );