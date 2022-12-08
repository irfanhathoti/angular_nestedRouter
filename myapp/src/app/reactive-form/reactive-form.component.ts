import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  eventForm: FormGroup;
  // hideAdd :boolean=true;

  constructor(private formBuilder: FormBuilder) {

    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.pattern('^[a-z0-9-.]+@(?=.*htcindia)([a-z])+\.[a-z]{2,3}$')])],
      password: ["", Validators.compose([Validators.required, Validators.pattern('^(?=.*[A-Za-z])[A-Za-z\d\S]{10,30}$')])],
      address: this.formBuilder.array([

      ]),
    });

  }
  get address(): FormArray {
    return this.eventForm.get("address") as FormArray
  }




  newAddress(): FormGroup {
    return this.formBuilder.group({
      address: ['', Validators.required,],
      pincode: ['', Validators.compose([Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(6)])]
    })
  }



  addAddress() {
    // this.hideAdd= false;
    this.address.push(this.newAddress());
  }


  removeAddress(i: number) {
    // this.hideAdd= true;
    this.address.removeAt(i);
  }

  onSubmit() {
    console.log(this.eventForm.value);
  }




  ngOnInit(): void {
  }



}
export class Events {
  id: string;
  name: string;
  email: string
  address: string;

  password: string

  constructor(id: string, name: string, email: string, address: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.password = password;

  }
}

