class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visiblity=255;
        this.image=loadImage("block.png");
      }
      display(){
      if(this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        this.visiblity-=5;
        push();
        tint(255,this.visiblity)
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
        pop();
      }
      }

      score(){
        if(this.visiblity<0&&this.visiblity>=-50){
          score++
        }
      }
}
