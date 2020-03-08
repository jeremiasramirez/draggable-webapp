import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public europe : any[] = []
  public latin : any[] = []
  public asia : any[] = []


  constructor(){
    this.setLatin();


  }

  setEurope(){}
  setLatin(){
    let latin :any[]= ["Colombia", "Argentina", "Uruguay", "Paraguay", "Honduras", "El salvador"]
    this.latin.push(latin)
  }
  setAsia(){}


}
