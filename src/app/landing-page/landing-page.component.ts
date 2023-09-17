import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(public dialog: MatDialog) {}

  public login(){
    const dialogRef = this.dialog.open(DialogLoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      window.location.href = "/user-homepage";
    });


   // window.location.href = "/user-homepage";
  }


  public signup(){
    window.location.href = "/user-homepage";
  }


}
