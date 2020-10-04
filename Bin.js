class bin{

    constructor (x,y,width,height){
    
        var options={
    
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y, width, height, options);
        this.width=width;
        this.height=height;
           // World.add(world,this.body);
           this.image=loadImage("dustbin1.png");
          
    }
    
    display(){
        
        var pos=this.body.position;
        imageMode(CENTER);
        fill("white");
        //rect(pos.x,pos.y,this.width, this.height);
        image(this.image,1150,500,this.width, this.height)
    }
    }
    
    
    
