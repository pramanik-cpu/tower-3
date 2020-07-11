class Ball {
  constructor(x, y, radius) {
      var options = {
          restitution:0.8,
          density:0.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.radius);
    }
}
