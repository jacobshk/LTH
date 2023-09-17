import { Component } from '@angular/core';



interface Language {
  value: string;
}
@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.css']
})


export class NewDocumentComponent {
  selectedValue = 'test';

  langauges: Language[] = [
    {value: 'English'},
    {value: 'Chinese'},
    {value: 'Spanish'},
  ];


  submitted = true;
  public submit(){
    this.submitted = false;
  }

  public submitdoc(){
    window.location.href = "/user-homepage";
  }
}
