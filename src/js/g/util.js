/*==============================================================================

Utilities

==============================================================================*/

/*==============================================================================

Math

==============================================================================*/

g.roundToNearest = function( value, nearest ) {
	return Math.round( value / nearest ) * nearest;
};

g.rand = function( min, max ) {
	return Math.random() * ( max - min ) + min;
};

g.randInt = function( min, max ) {
	return Math.floor( Math.random() * ( max - min + 1) ) + min;
};

/*==============================================================================

DOM

==============================================================================*/

g.getPrefix = function() {
	// credit: David Walsh - http://davidwalsh.name/vendor-prefix
	var styles = window.getComputedStyle( document.documentElement, '' ),
		pre = ( Array.prototype.slice.call( styles ).join( '' ).match( /-(moz|webkit|ms)-/ ) || ( styles.OLink === '' && [ '', 'o' ] ) )[ 1 ];
	return '-' + pre + '-';
};

g.css = function( elem, prop, val, prefixed ) {
	prop = prefixed ? g.prefix + prop : prop;
	elem.style[ prop ] = val;
};

/*==============================================================================

Collision

==============================================================================*/

g.rangeIntersect = function( min0, max0, min1, max1 ) {
	return Math.max( min0, max0 ) > Math.min( min1, max1 ) && Math.min( min0, max0 ) < Math.max( min1, max1 );
};

g.rectIntersect = function( r0, r1 ) {
	return g.util.rangeIntersect( r0.x, r0.x + r0.width, r1.x, r1.x + r1.width ) && g.util.rangeIntersect( r0.y, r0.y + r0.height, r1.y, r1.y + r1.height );
};

/*==============================================================================

Formatting

==============================================================================*/

g.formatPad = function( amount, digits ){
	amount += '';
	if( amount.length < digits ) {
		amount = '0' + amount;
		return g.util.format.pad( amount, digits );
	} else {
		return amount;
	}
};

g.formatTime = function( seconds ) {
	var minutes = Math.floor( seconds / 60 );
	seconds = Math.floor( seconds % 60 );
	return g.util.format.pad( minutes, 2 ) + ':' + g.util.format.pad( seconds, 2 );
};

g.formatCommas = function( nStr ) {
	nStr += '';
	var x = nStr.split( '.' ),
		x1 = x[ 0 ],
		x2 = x.length > 1 ? '.' + x[ 1 ] : '',
		rgx = /(\d+)(\d{3})/;
	while( rgx.test( x1 ) ) {
		x1 = x1.replace( rgx, '$1' + ',' + '$2' );
	}
	return x1 + x2;
};

/*==============================================================================

Miscellaneous

==============================================================================*/

g.isset = function( prop ) {
	return typeof prop != 'undefined';
};

g.objIsEmpty = function( obj ) {
	for( var prop in obj ) {
		if( obj.hasOwnProperty( prop ) ) {
			return false;
		}
	}
	return true;
};

g.merge = function( obj1, obj2 ) {
	for( var prop in obj2 ) {
		obj1[ prop ] = obj2[ prop ];
	}
};