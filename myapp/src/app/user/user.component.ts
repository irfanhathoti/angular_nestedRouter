import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../share/services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  UserDetails:any

  constructor(private userservice:ServicesService ) {
  
  }

  getAllUser(){
    this.userservice.getAllData().subscribe(response =>{
      this.UserDetails = response
      console.log(this.UserDetails)
    })
  }

  ngOnInit(): void {
    this.getAllUser()
  }

}
