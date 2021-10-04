let numX=4;
let numY=7;
//let nb,nb2,nb3,nb4;
//empty arraylist
let nbs=[]
function setup() {
  createCanvas(400, 400);
  
  
   //nb=new ourball(width/2,height/2,50)
   //nb2=new ourball(width/3,height/6,25,-3)
   //nb3=new ourball(width/4,height/2,10,-3,5)
   //nb4=new ourball(width/6,height/3,20)
//for loop

  for(let i=0;i<numX;i=i+1){
  for(let j=0;j<numY;j=j+1){
    nbs.push(new ourball(
      i*width/numX+width/numX/2,
      j*height/numY+height/numY/2,
      50));
    //circle(i*width/numX+width/numX/2,
      //    j*height/numY+height/numY/2,
        //  20);
    }
  }
  
}
    function draw() {
       background(220);
      //稱List裡面的每一個東西為v然後執行v所擁有的權力
      nbs.forEach((v)=>{
        v.display();
      })
      //nb.run()
      
      //nb.dislay();
      //nb2.dislay();
      //nb3.dislay();
      //nb4.dislay();
  }
//物件導向模式
class ourball{
  //建構類別需要的參數
  constructor(_x,_y,_s,_dx=1,_dy=-2.5){
    this.x=_x;
    this.y=_y;
    this.size=_s;
    //速度
    this.dx=3;
    this.dy=-5;
    this.color=color(255,204,0);
  }
  //能力method()
  display(){
    this.checkmouse();
    this.run();
    this.bounce();
    fill(this.color);
    circle(this.x,this.y,this.size);
  }
  run(){
    this.x=this.x+this.dx;
    this.y=this.y+this.dy;
  }
  bounce(){
    if(this.y-this.size/2<0){
      this.dy=-1*this.dy;
      this.color=color(255,255,0);
    }//upper side
    if(this.x+this.size/2>width){
      this.dx=-1*this.dx
      this.color=color(255,0,255);
    }//right side
    if(this.y+this.size/2>height){
      this.dy=-1*this.dy
      this.color=color(0,255,255);
    }//lower side
    if(this.x-this.size/2<0){
      this.dx=-1*this.dx
      this.color=color(255,255,255);
    }//left side
  }
  checkmouse(){
    //line(this.x,this.y,mouseX,mouseY)
    if(mouseX<this.x+this.size/2 &&
      mouseX>this.x-this.size/2 &&
      mouseY<this.x+this.size/2 &&
      mouseY>this.x-this.size/2 
      ){
       circle(this.x,this.y,this.size*1.5)
    }
  }
}