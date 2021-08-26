class ComputerArcher {
    constructor(x, y, width, height,angle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("assets/computerArcher.png");
      World.add(world, this.body);
    }
  
   display() {

      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      Matter.Body.setAngle(this.body, PI/2);
      pop();
    }
  }
  