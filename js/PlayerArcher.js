class PlayerArcher {
    constructor(x, y, width, height,angle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
  
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("assets/playerArcher.png");
      World.add(world, this.body);
      Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      //console.log(this.angle);
      
      if(keyIsDown(UP_ARROW) && angle > -2.1)
      {
          angle -= 0.02;
          Matter.Body.setAngle(this.body, angle);
      } 

      
      if(keyIsDown(DOWN_ARROW) && angle < -1.0)
      {
          angle += 0.02;
          Matter.Body.setAngle(this.body, angle);
      }

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CORNER);
      image(this.image, -90, 0, this.width, this.height);
      pop();
      
    }
  }
  