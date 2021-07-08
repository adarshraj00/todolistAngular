import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!:string;
  desc!:string;
  @Output() addTodo: EventEmitter<Todo> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  } 
  onSubmit(){
    const todo={
      sno:9,
      title:this.title,
      desc:this.desc,
      date:Date.now(),
      active:true
    }
    console.log(todo);
    console.log("test");
    this.addTodo.emit(todo);
  }
}
