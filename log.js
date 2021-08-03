class log{
    constructor(x,y,h,angle){
        // JSON method
        var log_options ={
            restitution:0.8,
            friction : 1.0,
            density:1.0
            
        }

     this.body = Bodies.rectangle(x,y,20,h,log_options);
     this.w=20;
     this.h=h;
     Matter.Body.setAngle(this.body,angle)
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