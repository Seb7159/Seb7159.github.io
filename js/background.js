var DEBUG = 0; 

var BIGCOL1 = 182, BIGCOL2 = 245,
	SMALLCOL1 = 118, SMALLCOL2 = 182,
	REFRESH_RATE = 200, SPEED = 1,
	PREFIX = getCssValuePrefix(); 

if( screen.width <= 1000 )
    REFRESH_RATE = 1000; 

var r1 = rnd( SMALLCOL1, BIGCOL1), r2 = rnd( SMALLCOL2, BIGCOL2),
	g1 = rnd( SMALLCOL1, BIGCOL1), g2 = rnd( SMALLCOL2, BIGCOL2),
    b1 = rnd( SMALLCOL1, BIGCOL1), b2 = rnd( SMALLCOL2, BIGCOL2);

var rd1 = 1, rd2 = 1,
    i1 = 100, i2 = 100,
    len1 = 0, len2 = 0
    bef1 = 128, bef2 = 128; 


(function move() { 

    // Wave 1
    if( i1 > len1 ){
    	i1 = 0;
    	len1 = rnd(1,64);
    	rd1 = rnd(1,3);
    	switch(rd1){
    		case 1: bef1 = r1;
    		case 2: bef1 = g1;
    		case 3: bef1 = b1; 
    	}
    }
    i1++; 
    
	if( bef1 + len1*SPEED > BIGCOL1 )
		switch(rd1){
			case 1: r1-=SPEED;
    		case 2: g1-=SPEED;
    		case 3: b1-=SPEED; 
			}
 	else 
  		if( bef1 - len1*SPEED < SMALLCOL1 )
	      	switch(rd1){
			case 1: r1+=SPEED;
    		case 2: g1+=SPEED;
    		case 3: b1+=SPEED; 
			}
	else{
		if( len1 % 2 == 0 )
			switch(rd1){
			case 1: r1+=SPEED;
    		case 2: g1+=SPEED;
    		case 3: b1+=SPEED;
			}
	    else
	    	switch(rd1){
			case 1: r1-=SPEED;
    		case 2: g1-=SPEED;
    		case 3: b1-=SPEED;
			}
	}

	if( r1 > BIGCOL1 ) r1 = BIGCOL1;
    if( g1 > BIGCOL1 ) g1 = BIGCOL1;
    if( b1 > BIGCOL1 ) b1 = BIGCOL1;

    if( r1 < SMALLCOL1 ) r1 = SMALLCOL1;
    if( g1 < SMALLCOL1 ) g1 = SMALLCOL1;
    if( b1 < SMALLCOL1 ) b1 = SMALLCOL1;


    // Wave 2
    if( i2 > len2 ){
    	i2 = 0;
    	len2 = rnd(1,64);
    	rd2 = rnd(1,3);
    	switch(rd2){
    		case 1: bef2 = r2;
    		case 2: bef2 = g2;
    		case 3: bef2 = b2; 
    	}
    }
    i2++; 
    
	if( bef2 + len2*SPEED > BIGCOL2 )
		switch(rd2){
			case 1: r2-=SPEED;
    		case 2: g2-=SPEED;
    		case 3: b2-=SPEED; 
			}
 	else 
  		if( bef2 - len2*SPEED < SMALLCOL2 )
	      	switch(rd2){
			case 1: r2+=SPEED;
    		case 2: g2+=SPEED;
    		case 3: b2+=SPEED; 
			}
	else{
		if( len2 % 2 == 0 )
			switch(rd2){
			case 1: r2+=SPEED;
    		case 2: g2+=SPEED;
    		case 3: b2+=SPEED;
			}
	    else
	    	switch(rd2){
			case 1: r2-=SPEED;
    		case 2: g2-=SPEED;
    		case 3: b2-=SPEED;
			}
	}

	if( r2 > BIGCOL2 ) r2 = BIGCOL2;
    if( g2 > BIGCOL2 ) g2 = BIGCOL2;
    if( b2 > BIGCOL2 ) b2 = BIGCOL2;

    if( r2 < SMALLCOL2 ) r2 = SMALLCOL2;
    if( g2 < SMALLCOL2 ) g2 = SMALLCOL2;
    if( b2 < SMALLCOL2 ) b2 = SMALLCOL2;




    if( DEBUG === 1 )
    	document.getElementById("body").innerHTML = r1 + ' ' + r2 + '<br>' + g1 + ' ' 
    												   + g2 + '<br>' + b1 + ' ' + b2 + "<br><br>" 
    												   + len1 + ' ' + rd1+ "<br>" + len2 + ' ' + rd2; 
    var hex1 = '#' + toHex(r1) + toHex(g1) + toHex(b1),
    	hex2 = '#' + toHex(r2) + toHex(g2) + toHex(b2); 
    //document.getElementById("body").style.backgroundColor='rgb('+r+','+g+','+b+')';
    var dom = document.getElementById('body');
    dom.style.backgroundImage = PREFIX + 'linear-gradient('
        + "bottom right" + ', ' + hex1 + ', ' + hex2 + ')';
    setTimeout(move, REFRESH_RATE);
})();

function getCssValuePrefix(){
    var rtrnVal = '';
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    var dom = document.createElement('div');

    for (var i = 0; i < prefixes.length; i++)
    {
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

        if (dom.style.background)
            rtrnVal = prefixes[i];
    }

    dom = null;
    delete dom;

    return rtrnVal;
}

function toHex(d) {
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}