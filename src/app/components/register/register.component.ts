import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  submitted = false;
  data: any;

  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: [''],
      password: [''],
      roles: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    this.data.push(this.registerForm.value);
    console.log(this.data);
  }

}
