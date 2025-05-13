class Rectangle{
    constructor(width,height,colour){
        this.width=width;
        this.height=height;
        this.colour=colour
    }
    area(){
        const area=this.width*this.height;
        return area;
    }
    paint(){
        console.log("The colour of the recatangle is..."+this.colour);
    }
}
const now=new Date();
console.log(now.getFullYear());
const rect1=new Rectangle(5,8,"Red");
console.log(rect1.area());
rect1.paint();
 