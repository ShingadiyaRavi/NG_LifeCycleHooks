import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  //#region [Data Trander Child To Parent && Parent To Child]

  // This data come from the parent class...
  @Input() Data:any;

  // This is used for the pass data child to parent class...
  @Output() childDataEvent = new EventEmitter<string>();

  // This method used for the add the data to the variable...
  addData(data:string){
    console.log(data);
    this.childDataEvent.emit(data);
  }

  //#endregion


  //#region [LifeCycle Hooks]
  /*
    ngAfterContentInit(): This is used for when 100% code render in the dom then agular status cheked then it will called this method...
  */
  // ngAfterContentInit(){
  //   console.log("child ngAfterContentInit called",this.Data);
  // }

  /*
    ngAfterContentChecked(): This is used for when all components are render in the dom then it will called...
  */
  // ngAfterContentChecked(){
  //   console.log("child ngAfterContentChecked called",this.Data);
  // }

  /*
    ngAfterViewInit(): This is used for the when child component 100% render then it will initialize something and it will callled...
  */
  // ngAfterViewInit(){
  //   console.log("child ngAfterViewInit called",this.Data);
  // }

  /*
    ngAfterViewChecked(): This is used for the child component 100% render and angular check that status and if proper then it will called...
  */
  // ngAfterViewChecked(){
  //   console.log("child ngAfterViewChecked called",this.Data);
  // }

  //#endregion


}
