class Stone {
constructor(x,y,r){

var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2
}
this.x=x
this.y=y
this.r=r
this.image=loadImage("images/stone.png")
this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)
}
display(){
push()
translate(this.body.x,this.body.y)
imageMode(CENTER)
image(this.image,0,0,this.r)
pop()

}


















}