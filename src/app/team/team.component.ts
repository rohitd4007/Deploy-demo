import { DataServiveService } from './../data-servive.service';
import { element } from 'protractor';
import { TeamDetailService } from './../team-detail.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit  {
  title = 'simple pagination demo';
  images=[];
  isWinner=0;
  issel=false;
  teamData=[];

 
constructor(private serv:TeamDetailService,
  private dataService:DataServiveService,
  private http:HttpClient,
  private _router:Router){}


  random() {
    return Math.floor(Math.random() * 3);
  }

  ngOnInit(): void {
    console.log(this.random());
    this.isWinner=this.random();
    this.teamData=this.dataService.dataFromService;
    console.log(this.dataService.dataFromService);
    if(this.dataService.dataFromService===undefined){
      this._router.navigate(['home']) 
    }

  
    for(var aa in this.dataService.dataFromService)
    this.images.push(this.dataService.dataFromService[aa]['Profile Image'])
  }
















  
// check(item,element){
//     if(element.target.checked==true){
//       console.log(item.team_name) 
//       this.teamData.push(item);
//       this.ischek+=1;
//     }
      
//     else
//       this.ischek-=1;
//     if(this.ischek==2){
//       document.getElementById("ischeck").innerHTML="selected";
//       this.issel=true;
//     }
//     else if(this.ischek>2)
//     alert("you can't select More than 2 team");
//     else
//       document.getElementById("ischeck").innerHTML="selected one more team";
// }
  
}


