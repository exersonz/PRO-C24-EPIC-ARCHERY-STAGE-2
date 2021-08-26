class PlayerArrow {
    constructor(x, y, width, height, angle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      this.image = loadImage("assets/arrow.png");
      World.add(world, this.body);
    }
  
   display() 
   {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle+PI/2);
      imageMode(CENTER);
      image(this.image, 50, 15, this.width, this.height);
      pop();
    }
  
    shoot(archerAngle)
    {
      console.log(archerAngle);
      var velocity = p5.Vector.fromAngle(archerAngle);
      velocity.mult(20);
      console.log(velocity);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body,{x: velocity.x, y: velocity.y});
    }
  }