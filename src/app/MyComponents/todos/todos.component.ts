import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!:Todo[]
  localItem:string|null
  constructor() {
    this.localItem=localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
    //this.todos=[
      // {
      //   sno:3,
      //   title:"this is title",
      //   desc:"sdn",
      //   active:true
      // },
      // {
      //   sno: 2,
      //   title: "this is title 2",
      //   desc: "desc",
      //   active: false
      // },
      // {
      //   sno:1,
      //   title:"this is title 1",
      //   desc:"desc1",
      //   active: false
      // }
    //]
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addtodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
