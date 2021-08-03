class box{
    constructor(x,y,w,h){
      
        var box_options ={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }

     this.body = Bodies.rectangle(x,y,w,h,box_options);
     this.w= w;
     this.h=h;
     World.add(world,this.body)
         

    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
    push();    //new settings
     translate (pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("brown");
     rect(0,0,this.w,this.h);
     pop();    //preserve old settings
    }
}