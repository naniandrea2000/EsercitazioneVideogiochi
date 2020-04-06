import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormArray,Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signForm: FormGroup;
  constructor(private login:LoginService,private fb: FormBuilder,private router: Router) { 
    this.signForm = this.fb.group({
      username:'',
      password: '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(user){
    this.router.navigateByUrl("/login");
    this.login.add(user);
  }
}
