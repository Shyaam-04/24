class Bird extends BaseClass {
    constructor(x, y) {
     super(x,y,50,50);
      
      this.img = loadImage("sprites/bird.png")
    };

    display(){
      this.body.postion.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
};
  