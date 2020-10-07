class Dustbin{

  constructor(x, y, height){
 
   var options = {
 
    'isStatic':true,
    
   }
 
   this.body = Bodies.rectangle(x, y, 70, height, options);
   this.image = loadImage("sprites/dustbingreen.png");
 
   World.add(world, this.body)
 
  }
 
  display(){
 
   var pos = this.body.position
 
   push()
     
   imageMode(CENTER)
 
   translate(pos.x, pos.y)
 
   rotate(this.body.angle)
 
   image(this.image, 0, 0, this.width, this.height);
 
   pop()
 
 }
 }