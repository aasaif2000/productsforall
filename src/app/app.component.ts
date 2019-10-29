import { Component } from '@angular/core';

import { Todos } from "./productsall";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project of Products for All';

todovalue: string;
list:Todos[];

ngOnInit() {
this.list = [];
this.todovalue = "";

}

addItem(){

  if(this.todovalue !== ""){
    const newItem: Todos = {
      id: Date.now(),
      value: this.todovalue,
      isDone: false
    };
    this.list.push(newItem);
  }
  this.todovalue= "";
}

deleteitem(id: number){
this.list = this.list.filter(item => item.id !== id);

}
}
