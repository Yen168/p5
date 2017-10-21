

class Ripple {
  constructor(diam, px = 200, py = 200) {
    this.px = px;
    this.py = py;
		this.diam = diam;
  }
	
draw() {
  noFill();
  ellipse(this.px, this.py, this.diam);
  this.diam = this.diam + 1;
	
  }	
	
}

var r =new Array();

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  
	for(var i = 0; i < r.length; i++) {
    
		if (r[i].diam < 800) {r[i].draw();}
		else {r.splice(i, 1);}
	
	}
  
}


function mouseClicked() {
  serialcallback();
  // prevent default
  return false;
}

function serialcallback(){
 var speed = random(-10, 10);
r.push(new Ripple(speed));

}
