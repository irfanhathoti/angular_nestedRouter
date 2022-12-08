import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../share/services.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usermail',
  templateUrl: './usermail.component.html',
  styleUrls: ['./usermail.component.css']
})
export class UsermailComponent implements OnInit {
  user:any

  constructor(private userEmail:ServicesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
    let id = this.route.snapshot.params['id']
    this.userEmail.getuser(id).subscribe((response) =>{
      console.log(response)
      this.user = response
    })

  }

}
