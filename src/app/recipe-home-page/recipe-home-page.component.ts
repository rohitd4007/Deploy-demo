import { DataServiveService } from './../data-servive.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-recipe-home-page',
  templateUrl: './recipe-home-page.component.html',
  styleUrls: ['./recipe-home-page.component.scss']
})
export class RecipeHomePageComponent implements OnInit {
image;
color='black';
active=true;
ischek=0;
ii=[];
s1=[];


name:string
showNextComponent(value:string) {
    this.name = value;
  }




  constructor(private serv:RecipeService,
    private dataService:DataServiveService,
    private _router:Router

   ) { }

  click(){
    // alert("clicked")
    
    this.active=!this.active
    
    
  }

  check(item,element){


  
//  console.log(element.target.checked);
if(element.target.checked==true){
  console.log(item.Name) 
  this.s1.push(item);
  this.ischek+=1;  
}
else{
  if(element.target.checked==false){
    // console.log(item.Name) 
    // console.log(this.s1.pop().Name)
    // if(item.Name==this.s1.pop().Name)
    // console.log(this.s1.indexOf(item.Name))
    for(var a of this.s1){
      if(a.Name==item.Name){
        this.s1.splice(this.s1.indexOf(a),1)
      }

      
    }
  }
}

    
    // if(element.target.checked==true)
    //   this.ischek+=1;
    // else
    //   this.ischek-=1;

    // if(this.ischek==2)
    //   document.getElementById("ischeck").innerHTML="selected";
    // else if(this.ischek>2)
    //   document.getElementById("ischeck").innerHTML="You cant select more than 2 team";
    // else
    //   document.getElementById("ischeck").innerHTML="selected one more team";


  }



  pp(){
    
      
      this.dataService.dataFromService = this.s1;
      this._router.navigate(['team']);
       }
  ngOnInit(): void {



    this.serv.getData().subscribe(
      msg=>{
        for(var i in msg){
          // console.log()
          this.image=msg
          this.ii.push(msg[i]["Profile Image"])

        }   
      }
    )

  }

}
