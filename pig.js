class pig{
    constructor(x,y){
      
        var pig_options ={
            restitution:0.8,
            friction:0.3,
            density:1.0
            
        }

     this.body = Bodies.rectangle(x,y,50,50,pig_options);
     this.w= 50;
     this.h=50;
     World.add(world,this.body)
         

    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
    push();    //new settings
     translate (pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("pink");
     rect(0,0,this.w,this.h);
     pop();    //preserve old settings
    }
}