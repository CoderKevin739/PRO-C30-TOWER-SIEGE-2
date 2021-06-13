class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.1,
          friction :0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility = 255;
    }
    display(){
      if(this.body.speed<4) {
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      }
      else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        rect(this.x, this.y, 20, 30);
        pop();
      }
    }
}