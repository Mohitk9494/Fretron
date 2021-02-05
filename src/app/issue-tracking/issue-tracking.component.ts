import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { IssueTrakingDetailsComponent } from '../../app/issue-traking-details/issue-traking-details.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-issue-tracking',
  templateUrl: './issue-tracking.component.html',
  styleUrls: ['./issue-tracking.component.css']
})
export class IssueTrackingComponent implements OnInit {

  constructor(private dailog: MatDialog, private _router: Router) {

  }

  ngOnInit(): void {
  }
  open() {
    const dailog = this.dailog.open(IssueTrakingDetailsComponent,
      {
        minHeight: "100vh",
        maxWidth: "95vw",
        data:{}
      }
      
    );
    dailog.afterClosed().subscribe(res=>{
      console.log(res);
      
    })

  }
  logout() {
    // localStorage.getItem('_token');
    localStorage.removeItem('_token')
    this._router.navigate(['/auth']);
  }
  demo(){
    this._router.navigate(['/demo']);
  }
}
