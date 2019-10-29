import { Component, OnInit } from '@angular/core';
import { User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit {

//Properties

user : User;
//Methods
constructor() {

}

ngOnInit(){

  this.user = {
    firstName : 'Abdul',
    lastName : 'Siddiqui',
    age : 30,
    address : {
    street : '1804 Arlington Ln',
    city : 'Arlington Ln',
    state : 'il'
    }
}
}
}


// firstName : string;
// lastName : string;
// age : number;
// address;
// foo : any;
// hasKids : boolean;
// numberArray: numbers[];
// stringArray: string[];
// mixedArray : any[];
// unusable : void;
// u : undefined;
// n:null;

  // firstName = 'Abdul';
// lastName = 'Siddiqui';
// age = 35;
// address = {
// street : '1804 Arlington',
// city : 'Glendale Heights',
// state : 'il'}



// this.firstName = "Abdull";
// this.lastName =  "Siddiqui";
// this.age = 35;
// this.address ={
//   street : '1804 Arlington',
//   city : 'Glendale Heights',
//   state: 'il'
// }
// this.foo = true;

// this.hasKids = true;
// this.numberArray = [1,2,3,4];
// this.stringArray = ['hello','Worlds'];
// this.mixedArray = [true,1,'hello'];
// this.unusable = undefined;
// this.u = undefined;
// this.n = null;

// console.log(this.addNumbers(2,3));


// showAge(){

//   return this.age + 2;
// }

// addNumbers(num1:number,num2:number): number{
// return num1+num2;

// }
// sayHello(){
// console.log('Hello' + this.firstName);
// }
// addage(){
// this.age +=1;

// }




  //  firstName = "Abdul";
//  lastName = "Siddiqui";
//  age = 35;

// //Methods
//   constructor() { 
// //this.sayHello();
// this.hasBirthday();
// console.log(this.age);
//   }

// sayHello() {
//   console.log('Hello' + this.firstName);
// }
// hasBirthday(){
//   this.age  += 1;
// }



