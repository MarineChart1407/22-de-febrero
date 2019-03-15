class Pelota{
  constructor(){
    this.x1=30;
    this.y1=30;
    this.velx = random (3,10);
    this.vely	=	random (3,10);
    this.posx = random (0,400);
    this.posy = random (0,400);
    this.R = random (0,255);
    this.G = random (0,100);
    this.B = random (0,100);
  }
  mostrar(){
    ellipse(this.posx,this.posy,this.x1,this.y1);
    fill(this.R,this.G,this.B);
  }
  mover(){
    this.posx=this.posx+this.velx;
    this.posy=this.posy+this.vely;
    
  }
  salirx(){
    var res;
    if(this.posx <0||this.posx>width ){
      res=true
       } else {
      res=false
    }
    return res;
  }
  saliry(){
    var res;
    if(this.posy < 0|| this.posy>height ){
       res=true
       } else {
      res=false
    }
    return res;
  }
  rebotarx(){
    this.velx=this.velx * -1
  }

	rebotary(){
    this.vely=this.vely * -1 
  }
}
