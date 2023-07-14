import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycalculator';

  toshow = '0';
  cuurvalue ='';

  writetoinput (value:string){
    this.cuurvalue += value
    this.toshow = this.cuurvalue
  }

  equals() {
    this.toshow = eval(this.cuurvalue)
    this.cuurvalue = this.toshow

  }

  clear() {
    this.cuurvalue ='';
    this.toshow = '0' 
  }

  back(){
    this.cuurvalue = this.cuurvalue.slice(0,-1)
    this.toshow = this.cuurvalue
    if(this.toshow==''){
      this.toshow='0'
    }
    
  }



}
