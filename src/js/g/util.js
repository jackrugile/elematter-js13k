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

g.qS = function( q ) {
	var query = document.querySelectorAll( q );
	if( query.length > 1 ) {
		return query;
	} else {
		return query[ 0 ];
	}
};

g.cE = function( appendParent, classes ) {
	elem = document.createElement( 'div' );
	if( appendParent ) {
		appendParent.appendChild( elem );
	}
	if( classes ) {
		g.addClass( elem, classes );
	}
	return elem;
};


g.text = function( elem, content ) {
	elem.firstChild.nodeValue = content;
};

g.resetAnim = function( elem ) {
	g.removeClass( elem, 'anim' );
	elem.offsetWidth = elem.offsetWidth;
	g.addClass( elem, 'anim' );
};

// credit: Julian Shapiro - http://julian.com/research/velocity/
g.prefixCheck = function (property) {
	if (g.prefixMatches[property]) {
		return [ g.prefixMatches[property], true ];
	} else {
		var vendors = [ "", "Webkit", "Moz", "ms", "O" ],
			cb = function(match) { return match.toUpperCase(); }
		for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
			var propertyPrefixed;
			if (i === 0) {
				propertyPrefixed = property;
			} else {
				propertyPrefixed = vendors[i] + property.replace(/^\w/, cb);
			}
			if (g.isString(g.prefixElement.style[propertyPrefixed])) {
				g.prefixMatches[property] = propertyPrefixed;
				return [ propertyPrefixed, true ];
			}
		}
		return [ property, false ];
	}
};

g.css = function( elem, prop, val ) {
	prop = g.prefixCheck( prop );
	if( prop[ 1 ] ) {
		elem.style[ prop[ 0 ] ] = val;
	}
};

// credit: Todd Motto - https://github.com/toddmotto/apollo
g.hasClass = function ( elem, className ) {
	return elem.classList.contains( className) ;
};

g.addClass = function ( elem, className ) {
	if( className.indexOf( ' ' ) != -1 ) {
		classes = className.split( ' ' );
		classes.forEach( function( className ) {
			g.addClass( elem, className );
		});
	} else {
		elem.classList.add( className );
	}
};

g.removeClass = function ( elem, className ) {
	if( className.indexOf( ' ' ) != -1 ) {
		classes = className.split( ' ' );
		classes.forEach( function( className ) {
			g.removeClass( elem, className );
		});
	} else {
		elem.classList.remove( className );
	}
};

g.toggleClass = function ( elem, className ) {
	elem.classList.toggle( className );
};

g.attr = function( elem, attr ) {
	return elem.getAttribute( attr );
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

g.formatCommas = function( n ) {
	/*nStr += '';
	var x = nStr.split( '.' ),
		x1 = x[ 0 ],
		x2 = x.length > 1 ? '.' + x[ 1 ] : '',
		rgx = /(\d+)(\d{3})/;
	while( rgx.test( x1 ) ) {
		x1 = x1.replace( rgx, '$1' + ',' + '$2' );
	}
	return x1 + x2;*/
	n = Math.round( n );
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/*==============================================================================

Miscellaneous

==============================================================================*/

g.isString = function (variable) {
	return (typeof variable === "string");
};

g.isSet = function( prop ) {
	return typeof prop != 'undefined';
};

g.isObjEmpty = function( obj ) {
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