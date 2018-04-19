var sketch1 = function(p) {

  p.smile;

  p.setup = function() {
    var myCanvas2 = p.createCanvas(p.windowWidth, p.windowHeight);
    myCanvas2.parent('animation-1')
    p.smile = new Smile();
  }

  p.draw = function() {
   p.background(0);
    p.smile.move();
    p.smile.show();
  }

  class Smile {
    constructor() {
      this.x = 1000;
      this.y = 400;
    }
    move() {
      this.x = this.x + p.random(-5,5);
      this.y = this.y + p.random(-5,5);
    }

    show() {
      p.stroke(255);
      p.strokeWeight(4);
      p.noFill();
         //head
  	p.ellipse(this.x, this.y, 600, 600);

  	//left eye
  	p.ellipse(this.x - 75, this.y - 75, 60, 60);

  	//right eye
  	p.ellipse(this.x + 75, this.y - 75, 60, 60);

  	//smile
  	p.arc(this.x , this.y + 60, 240, 240, 0, p.PI, p.OPEN);
    }
  }
}

var myp5 = new p5(sketch1);
