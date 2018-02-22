//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
        
if(compassHeading > 315 || compassHeading < 45) {
                text_area.textContent = compassHeading;
        }

        if(compassHeading >= 45 && compassHeading < 135) {
                text_area.textContent = "∞ pleasure ∞";
        }

        if(compassHeading >= 135 && compassHeading < 225) {
                text_area.textContent = "∞ waterfall ∞ empty ∞ synthesis ∞";
        }

        if(compassHeading >= 225 && compassHeading < 315) {
                text_area.textContent = "∞ centre ∞ ";
        }

       //  text_area.textContent = compassHeading;
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


