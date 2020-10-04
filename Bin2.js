class binother{

   

        constructor (x,y,width,height){
        
            var options={
        
                isStatic:true,
                //restitution:0.3
            }
            this.body=Bodies.rectangle(x,y, width, height, options);
            this.width=width;
            this.height=height;
                World.add(world,this.body);
                //this.image=loadImage("sprites/dustbin1.png");
        }
        
        display(){
            
            var pos=this.body.position;
            rectMode(CENTER);
            fill("white");
            rect(pos.x,pos.y,this.width, this.height);
        }
        
        
        
    }