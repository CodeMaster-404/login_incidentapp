import { AuthenticationService } from './../../../_services/authentication.service';
import { Component, NgModule, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthModule } from "../auth.module";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';
  defaultValue: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private authenticationService: AuthenticationService){}

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:  ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(){
     // stop here if form is invalid
    if(this.loginForm.invalid){
      alert("form invalid");
      return;
    //validate fields
    }
    else
    {
      this.loading = true;
      this.authenticationService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.error = error;
            this.loading = false;
          }
        )

      alert('Form submitted \n' + JSON.stringify(this.loginForm.value));
    }

  }
}
