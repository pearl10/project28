class Bin3 {
    constructor(x, y,width, height,angle) {
      var options = {
         
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y,width , height, options);
      this.width =width;
      this.height = height;
     
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
     
      rectMode(CENTER);
      strokeWeight(3);
      stroke("black");
      fill("blue");
      rect(0,-80, 150, 20);
      pop();
    }
  };
  