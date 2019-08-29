import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: any;
  submitted = false;
  data = [];
  loginVerification: any;

  constructor(private fb: FormBuilder, private loginService: LoginServiceService, private router: Router, ) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return false;
    }

    this.loginService.getLogin().subscribe( (resp) => {
      this.loginVerification = resp;
      if (( this.loginVerification.username === this.loginForm.value.username )
      && (this.loginVerification.password === this.loginForm.value.password )) {
        console.log('Credentials Matched');
        this.router.navigate(['/dashboard']);
      }
    });
    this.data.push(this.loginForm.value);
    console.table(this.data);
  }

}
