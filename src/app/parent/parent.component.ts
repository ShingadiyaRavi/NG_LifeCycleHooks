import { Component,Input,OnChanges,Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  //#region [Data Trander Child To Parent && Parent To Child]

  // This variable used for the store the data into variable...
  parentData:any={};

  // This variable used for the store the data into variable that data come from the child...
  childData:string = '';

  // This method used for the add data to the variable...
  addData(data:any){
    console.log(data);
    this.parentData = data;
  }

  // This method used for the get data from the child component and add the data into variable...
  getData(data:string){
    this.childData = data;
  }

  //#endregion

  //#region  [LifeCycle Hooks]
  /*
    ngOnInit() : This is used for the when DOM is render then initialize the component and it only one time called. So we want to sometime initialize data only one time and access that in our dom and project then we can used it...
  */
  ngOnInit(){
    console.log("Parent ngOnInit called",this.parentData);
  }

  /*
    ngOnChanges(variable:dataType): This is used for the input data change on submit event that time called. means when  every time called it when submit button event called and input data change so it is used....
  */
  ngOnChanges(changes : any){
    console.log("Parent ngOnChange called",this.parentData);
  }

  /*
    ngDoCheck():  This is used for the when any movement change then it will called.. like input field one by one character enter in the field that time it will every time called...

    It is more expensive for the project because it will all event and behaviour handle so it will run in back so it is load to hardare and it will reduce the application performance so this hook avoid when we dont need it...
  */
  ngDoCheck(){
    console.log("Parent ngDoCheck called",this.parentData);
  }

  //#endregion

}
