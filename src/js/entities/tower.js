/*==============================================================================

Tower

==============================================================================*/

g.Tower = function( opt ) {
	g.merge( this, opt );
	this.init();
};

g.Tower.prototype.init = function() {
	this.guid = g.guid++;
	this.data = g.data.towers[ this.type ];
	this.lvl = 0;
	this.counters = this.data.counters;

	this.cx = this.col * g.size + g.size / 2; // center x
	this.cy = this.row * g.size + g.size / 2; // center y
	
	this.slabRotation = this.state.globalSlabRotation;
	this.turretRotation = this.state.globalTurretRotation;
	this.coreScale = this.state.globalCoreScale;

	this.setupDom();
	this.setupEvents();
	this.setStats();
};

g.Tower.prototype.step = function() {
	this.slabRotation += ( this.state.globalSlabRotation - this.slabRotation ) * 0.2;
	this.coreScale += ( this.state.globalCoreScale - this.coreScale ) * 0.2;
	var angle = this.state.globalTurretRotation;
	if( this.target ) {
		var dx = this.target.cx - this.cx,
			dy = this.target.cy - this.cy,
			dist = Math.sqrt( dx * dx + dy * dy );
		angle = Math.atan2( dy, dx ) + Math.PI * 0.75;
	}
	this.turretRotation = angle;

	if( this.state.isPlaying ) {
		this.getTarget();
		this.fire();

		if( this.bulletTick < this.rte ) {
			this.bulletTick++;
		}
	}
};

g.Tower.prototype.draw = function() {
	g.css( this.dom.slab, 'transform', 'rotate(' + this.slabRotation + 'rad)' );
	g.css( this.dom.turret, 'transform', 'rotate(' + this.turretRotation + 'rad)' );
	g.css( this.dom.core, 'transform', 'scale(' + this.coreScale + ')' );
};

g.Tower.prototype.setStats = function() {
	var stats = this.data.stats[ this.lvl ];
	this.costToUpgrade = stats.cost;
	this.dmg = stats.dmg;
	this.rng = stats.rng;
	this.rte = stats.rte;

	this.bulletTick = this.rte;

	g.css( this.dom.range, {
		'width': this.rng * 2 + 'px',
		'height': this.rng * 2 + 'px',
		'marginLeft': -this.rng + 'px',
		'marginTop': -this.rng + 'px',
	});
};

g.Tower.prototype.upgrade = function() {
	this.lvl++;
	this.setStats();
};

g.Tower.prototype.getTarget = function() {
	var enemies = this.state.enemies,
		enemiesInRange = [];
	// if enemies are on the map
	if( enemies.length ) {
		// loop over enemies to get which ones are in range
		enemies.each( function( enemy, i, collection ) {
			var dist = g.distance( this.cx, this.cy, enemy.cx, enemy.cy );
			if( this.rng + enemy.radius > dist ) {
				enemiesInRange.push( enemy );
			}
		}, 1, this );
		// if enemies are in range
		if( enemiesInRange.length ) {
			// sort them by distance traveled
			enemiesInRange.sort(function( a, b ) {
				return a.distanceTraveled - b.distanceTraveled;
			});
			// set target
			this.target = enemiesInRange.pop();
		} else {
			this.target = null;
		}
	}
};

g.Tower.prototype.fire = function() {
	// if this tower has a target enemy
	if( this.target ) {
		// if we can fire a bullet at current rate
		if( this.bulletTick >= this.rte ) {
			g.audio.play( 'laser' );
			this.bulletTick = 0;
			var bullet = new g.Bullet({
				state: this.state,
				type: this.type,
				counters: this.counters,
				dmg: this.dmg,
				target: this.target.guid,
				x: this.cx,
				y: this.cy
			});
			this.state.bullets.push( bullet );
		}
	}
};

g.Tower.prototype.setupDom = function() {
	this.dom = {};
	this.dom.wrap   = g.cE( this.state.dom.state, 't-wrap t-type-' + this.type );
	this.dom.tower  = g.cE( this.dom.wrap, 't-tower' );
	this.dom.slab   = g.cE( this.dom.tower, 't-slab' );
	this.dom.turret = g.cE( this.dom.tower, 't-turret' );
	this.dom.base   = g.cE( this.dom.tower, 't-base' );
	this.dom.core   = g.cE( this.dom.tower, 't-core' );
	this.dom.range  = g.cE( this.dom.tower, 't-range' );
	g.css( this.dom.wrap, 'transform', 'translate3d(' + this.col * g.size + 'px , ' + this.row * g.size + 'px, 0 )');
};

g.Tower.prototype.setupEvents = function() {
	g.on( this.dom.wrap, 'click', this.onClick, this );
};

g.Tower.prototype.onClick = function() {
	if( !this.state.isTowerMenuOpen ) {
		this.state.showTowerMenu( this );
		this.state.lastClickedTower = this;
		g.addClass( this.dom.wrap, 'selected' );
	}
};