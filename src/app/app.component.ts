import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-in-action';
  todoArray=[];
  addTodo(value){  
    this.todoArray.push(value);     
  }

  deleteItem(item){
    for(let i=0; i<this.todoArray.length; i++){
      if(item == this.todoArray[i]){
        this.todoArray.splice(i,1);
      }
    }
  }
}
 

