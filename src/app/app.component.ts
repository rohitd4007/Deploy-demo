import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HackedRecipe';


collection = [];
constructor(){
for(let i=1;i<=100;i++){
let Obj = {'name': `Employee Name ${i}`,'code': `EMP00 ${i}`}
this.collection.push(Obj);
}
}
}
