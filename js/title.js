var CHANGE_OP = 0.0025,
	LEFT = 50,
	CHANGE_LEFT = 0.2,
	REFRESH_RATE = 50,
	ANIM_NO = 1; 

if( screen.width <= 1000 )
    REFRESH_RATE = 1000; 

function fadeIn(el) {
  el.style.opacity = 0;

  var tick = function() {
    el.style.opacity = +el.style.opacity + CHANGE_OP;
    if( ANIM_NO != 5 )
    	el.style.left    = LEFT;
    else
    	el.style.right   = LEFT;
    LEFT             = LEFT + CHANGE_LEFT;
    CHANGE_OP        = 1.04*CHANGE_OP;
    CHANGE_LEFT      = 1.01*CHANGE_LEFT;  

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, REFRESH_RATE)
    }
    else{
    	if(ANIM_NO==1){
    		ANIM_NO++; 
    		CHANGE_LEFT = 0.1;
    		CHANGE_OP = 0.00001;
    		LEFT = 50;
    		fadeIn(document.getElementById("name"));
    	}
    	else if(ANIM_NO==2){
    		ANIM_NO++;
    		CHANGE_LEFT = 0.1;
    		CHANGE_OP = 0.00001;
    		LEFT = 50; 
    		fadeIn(document.getElementById("meet"));
    	}
    	else if(ANIM_NO==3){
    		ANIM_NO++;
    		CHANGE_LEFT = 0.08;
    		CHANGE_OP = 0.00001;
    		LEFT = 120; 
    		fadeIn(document.getElementById("irony"));
    	}
    	else if(ANIM_NO==4){
    		ANIM_NO++;
    		CHANGE_LEFT = 0.005;
    		CHANGE_OP = 0.0000001;
    		LEFT = 100; 
    		fadeIn(document.getElementById("contact"));
    	}
    	else return; 
    }
  };

  tick();
}

fadeIn(document.getElementById("title"));

