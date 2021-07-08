import { Component, NgModule } from '@angular/core';
import { UserDataService } from './user-data.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  constructor(private user:UserDataService){
    // setTimeout(()=>{
    //   this.title="changed title";
    // },2000)
    console.warn(this.user)  
  }
}
