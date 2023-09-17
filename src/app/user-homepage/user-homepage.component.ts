import { Component } from '@angular/core';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent {
  refreshed = false;

  public refresh(){
    this.refreshed = true;
  }
  public upload(){
    window.location.href = "/new-document";
  }

  public account(){
    window.location.href = "/account";
  }

}
