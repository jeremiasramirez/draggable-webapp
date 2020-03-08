import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public progress:boolean=false;
  public europe :any[]= ["France", "Italy", "Germany", "Suiza","Uruguay", "Polonia", "Austria","El salvador"]
  public latin :any[]= ["Colombia", "Reino unido", "Argentina",  "Grecia", "Paraguay", "Honduras"]

  constructor(){
    this.isProgress(700)
  }
  drop(event: CdkDragDrop<any>) {
      this.isProgress()
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,event.container.data, event.previousIndex,
                          event.currentIndex);
      }
    }
    isProgress(timing:number=300){
      this.progress = true;
      setTimeout(() => {
        this.progress = false;
      }, timing);
    }
}
