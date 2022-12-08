import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../share/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  userDetail:any


  constructor(private route:ActivatedRoute,private user:ServicesService ) { 
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    console.log(this.route)
    this.user.getuser(id).subscribe((response) =>{
      console.log(response)
      this.userDetail = response
    })
  }

}
