import { Component, OnInit } from '@angular/core';
import { userDetails } from '../user/userDetails';

@Component({
  selector: 'app-templet-form',
  templateUrl: './templet-form.component.html',
  styleUrls: ['./templet-form.component.css']
})
export class TempletFormComponent implements OnInit {

  userData: userDetails


  constructor() {

    this.userData = new userDetails()
    console.log(this.userData)

  }


  handleSubmit():void{
    console.log(JSON.stringify(this.userData))
  }

  ngOnInit(): void {

  }

}
