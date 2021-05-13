import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})

export class SignupComponent implements OnInit {

  signup;

  constructor(private UserService:UserService) { }

  ngOnInit(){
    this.signup = {
      email:"",
      username:"",
      is_staff: false,
      password:""
    }
  }

  signupUser(){
    this.UserService.AddUser(this.signup).subscribe(
      response => {
        alert('user' + this.signup.username + 'has been created')
      },
      error => console.log('error', error)
    )
  }
}
