// import {CategoryPage}from'../../pages/category/category';
// import { Component } from '@angular/core';

// import {AlertController, IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
// import{imageWithObject}from'../../app/classes/imageWithObject';
// import{ImagesProvider}from '../../providers/images-service/images-service';

// import { imageObject } from '../../app/classes/Object';
// // import{}from '../../voice/horse.mp3'
// /**
//  * Generated class for the ImagePage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-image',
//   templateUrl: 'image.html',
// })

// export class ImagePage {
// images:any[];//the image array for each category
// img;//="https://bit.ly/2MDc4b4";//shorturl.at/doEJ4//service call insert image obj...
// ind=0;//image index in the array
// arrowb=false;// display arrow back 
// arrowf=true;//display arrow forth
// counter:number=0;//curent number image
// heigtscreen:any;
// widthscreen:any;
// categoryId: any;
// yScreen: number;
// xScreen:number;
//   imagewidth: any;
//   imageheight: any;
  
//   constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,servImage:ImagesProvider,platform:Platform) {
    
//     this.categoryId=navParams.get('categoryId');
//     this.ind=navParams.get('idimage');//started with 0 gets the image id
//     //service call - 10 images lodaing 
//     // servImage.getImagesByCategory(this.ind);
    
//     //the ten images that are currently in the system
//      this.images=servImage.imagesArr;
//      for (let index = 0; index < this.images.length; index++) {
//        if(this.images[index].image.ImageID==this.ind)
//        {
//         this.img=this.images[index];
//          break;
//        }
//        this.counter++;       
//      }
//     //  this.img=this.images.find(a=>a.image.ImageID==this.ind);
//      this.heigtscreen=platform.height();
//      this.widthscreen=platform.width();
    
//   }

// messagebox(nameobject:string)
// {
  
//     let alert = this.alertCtrl.create({
//       title: 'object name',
//       subTitle: nameobject,
//       buttons: ['Dismiss']
//     });
//     alert.present();
  
// }
// x:number;
// y:number;
// elementinfo:any;
// b:any; 
// audio:any;
// NameObject=" ";
// findobject(){
// for (let index = 0; index < this.img.imageObjects.length; index++) {
//   const OneObject = this.img.imageObjects[index]; 
//   this.x/=this.imagewidth;
//   this.y/=this.imageheight;
  
//   //checks if the click is in the range of the current object is 
//   if(this.x>=OneObject.X1&&this.y>=OneObject.Y1
//     &&this.x<=OneObject.X2&&this.y>=OneObject.Y2
//     &&this.x<=OneObject.X3&&this.y<=OneObject.Y3
//     &&this.x>=OneObject.X1&&this.y<=OneObject.Y4)
//     {
//       debugger;
//       console.log(OneObject.Name);
//      this.NameObject=OneObject.Name;
//     this.initVoice(OneObject.VoiceURL)
//       this.playAudio() 
     
//     }
//     this.x*=this.imagewidth;
//   this.y*=this.imageheight;
// } 
// }
// findclickcoordinants(event){
//   debugger;
//   console.log;
//   this.x=event.clientX;//the click position that the user  made-x
//   this.y=event.clientY;//" y
//    this.elementinfo=document.getElementById("image").getBoundingClientRect();
//   // this.yScreen =this.heigtscreen-  this.elementinfo.bottom;
//   // this.xScreen =this.widthscreen-  this.elementinfo.left;
//   // this.x-=this.xScreen;
//   // this.y-=this.yScreen;
//   ///find vision coordinates
//  // this.findobject();
// this.y=this.y-this.elementinfo.top;
// this.x=this.x-this.elementinfo.left;

// this.imagewidth=this.elementinfo.width;
// this.imageheight=this.elementinfo.height;
// document.getElementById("ooo").setAttribute("style","margin-left:50%;margin-top:1%;color:blue;font-size:250%");
// this.findobject();

// }
// goback(){//lets user go back to image before the current image
//   debugger;
//   if(this.counter==0){
//     this.img=this.images[this.counter];
//     //iocon prev page service call
//   }
//   else{
//     this.counter--;
//      this.img=this.images[this.counter];
//   }
  
// }
// goforward(){// lets user go forward to next image from image array
//   debugger;
//   if(this.counter==this.images.length-1){
//     this.img=this.images[this.counter];  
//     //iocon next page service call 
//   }
//   else{ 
//      this.counter++
//      this.img=this.images[this.counter];
//   }
 
// }

// goHome(event){//go to home page where u can choose again a category and start to play again...............
// debugger;
// this.x=event.clientX;
// this.y=event.clientY;
// this.navCtrl.push(CategoryPage,{});
// }
// ionViewDidLoad() {
//     console.log('ionViewDidLoad ImagePage');
// }
//  initVoice(voiceURL:string) {
//     this.audio = new Audio();
//     this.audio.src = voiceURL;
//     this.audio.load();
//   }
// playAudio() { 
//  this.audio.play();
//    this.audio.loop = false;
// }
//   stopAudio() {
//     this.audio.pause(); 
//   }
//   ngOnDestroy() {
//     if(this.audio) {
//       this.audio.pause();
//       this.audio = null;
//     }
//   }

// }



import {CategoryPage}from'../../pages/category/category';
import { Component } from '@angular/core';

import {AlertController, IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import{imageWithObject}from'../../app/classes/imageWithObject';
import{ImagesProvider}from '../../providers/images-service/images-service';

import { imageObject } from '../../app/classes/Object';
// import{}from '../../voice/horse.mp3'
/**
 * Generated class for the ImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})

export class ImagePage {
images:any[];//the image array for each category
img;//="https://bit.ly/2MDc4b4";//shorturl.at/doEJ4//service call insert image obj...
ind=0;//image index in the array
arrowb=false;// display arrow back 
arrowf=true;//display arrow forth
counter:number=0;//curent number image
heigtscreen:any;
widthscreen:any;
categoryId: any;
yScreen: number;
xScreen:number;
  imagewidth: any;
  imageheight: any;
  
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,servImage:ImagesProvider,platform:Platform) {
    
    this.categoryId=navParams.get('categoryId');
    this.ind=navParams.get('idimage');//started with 0 gets the image id
    //service call - 10 images lodaing 
    // servImage.getImagesByCategory(this.ind);
    
    //the ten images that are currently in the system
     this.images=servImage.imagesArr;
     for (let index = 0; index < this.images.length; index++) {
       if(this.images[index].image.ImageID==this.ind)
       {
        this.img=this.images[index];
         break;
       }
       this.counter++;       
     }
    //  this.img=this.images.find(a=>a.image.ImageID==this.ind);
     this.heigtscreen=platform.height();
     this.widthscreen=platform.width();
    
  }

messagebox(nameobject:string)
{
  
    let alert = this.alertCtrl.create({
      title: 'object name',
      subTitle: nameobject,
      buttons: ['Dismiss']
    });
    alert.present();
  
}
x:number;
y:number;
elementinfo:any;
b:any; 
audio:any;
NameObject=" ";
listIn:imageObject[]=[];
findClosestObj(){
  debugger;
  var smalldest=Number.MAX_VALUE;
  var myObjc=this.listIn[0];
  for (let i = 0; i < this.listIn.length; i++) {
   var result=this.dest(this.listIn[i]);
   smalldest=result < smalldest?result:smalldest;//this closser than ?
   myObjc= smalldest == result?this.listIn[i]:myObjc;//save the closest object!!!!
  }
  return myObjc;
}
dest(obj:imageObject){
var d1=Math.pow(this.x-obj.X1,2)+Math.pow(this.y-obj.Y1,2);
var d2=Math.pow(this.x-obj.X2,2)+Math.pow(this.y-obj.Y2,2);
var d3=Math.pow(this.x-obj.X3,2)+Math.pow(this.y-obj.Y3,2);
var d4=Math.pow(this.x-obj.X4,2)+Math.pow(this.y-obj.Y4,2);
return d1+d2+d3+d4;//without ^\שורש 
}
flag:boolean;
findobject(){this.flag=true;
  debugger;
for (let index = 0; index < this.img.imageObjects.length; index++) {
  debugger;
  const OneObject = this.img.imageObjects[index]; 
  this.x/=this.imagewidth;
  this.y/=this.imageheight;
  //checks if the click is in the range of the current object is 
  if(this.x>=OneObject.X1&&this.y>=OneObject.Y1
    &&this.x<=OneObject.X2&&this.y>=OneObject.Y2
    &&this.x<=OneObject.X3&&this.y<=OneObject.Y3
    &&this.x>=OneObject.X1&&this.y<=OneObject.Y4)
    {
      debugger
      //founded in this place
      this.listIn.push(OneObject);
    //   console.log(OneObject.Name);
    //  this.NameObject=OneObject.Name;
    // //  this.initVoice(OneObject.)
    //   this.playAudio() ;
     //break;
     this.flag=false;
    }
    this.x*=this.imagewidth;
    this.y*=this.imageheight;
    debugger;
  }
  if(this.flag==false)
  {
    var clossestObj= this.findClosestObj();
    console.log(clossestObj.Name);
    this.NameObject=clossestObj.Name;
    this.initVoice(clossestObj.VoiceURL);
    this.playAudio() ;
  }
  else{
    this.flag=true;
  }
} 

findclickcoordinants(event){
  this.listIn=[];
  debugger;
  console.log;
  this.x=event.clientX;//the click position that the user  made-x
  this.y=event.clientY;//" y
  this.elementinfo=document.getElementById("image").getBoundingClientRect();
  // this.yScreen =this.heigtscreen-  this.elementinfo.bottom;
  // this.xScreen =this.widthscreen-  this.elementinfo.left;
  // this.x-=this.xScreen;
  // this.y-=this.yScreen;
  ///find vision coordinates
 // this.findobject();
this.y=this.y-this.elementinfo.top;
this.x=this.x-this.elementinfo.left;

this.imagewidth=this.elementinfo.width;
this.imageheight=this.elementinfo.height;
 document.getElementById("ooo").setAttribute("style","margin-left:1%;margin-top:1%;color:blue;font-size:250%");

this.findobject();

}

goback(){//lets user go back to image before the current image
  debugger;
  this.NameObject="";
  if(this.counter==0){
    this.img=this.images[this.counter];
    //iocon prev page service call
  }
  else{
    this.counter--;
     this.img=this.images[this.counter];
  }
  
}
goforward(){// lets user go forward to next image from image array
  debugger;
  this.NameObject="";
  if(this.counter==this.images.length-1){
    this.img=this.images[this.counter];  
    //iocon next page service call 
  }
  else{ 
     this.counter++
     this.img=this.images[this.counter];
  }
 
}

goHome(event){//go to home page where u can choose again a category and start to play again...............
debugger;
this.x=event.clientX;
this.y=event.clientY;
this.navCtrl.push(CategoryPage,{});
}
ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
}
 initVoice(voiceURL:string) {
    this.audio = new Audio();
    this.audio.src = voiceURL;
    this.audio.load();
  }
playAudio() { 
 this.audio.play();
   this.audio.loop = false;
}
// playAudio() { 
//  this.audio.play();
//    this.audio.loop = false;
// }
  stopAudio() {
    this.audio.pause(); 
  }
  ngOnDestroy() {
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

}

