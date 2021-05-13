import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  users = [];
  selectedUser;
  hoods = [];

  constructor(private user: UserService) {
    this.getUsers();
    this.selectedUser = {id: -1, username: '' , email: ''};
  }
  getUsers = () => {
    this.user.getAllUsers().subscribe(
      data => {
        this.users = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
      
    );
  }
  getUser = (user) => {
    this.user.getOneUser(user.id).subscribe(
      data => {
        this.selectedUser = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }
  updateUser = () => {
    this.user.updateUser(this.selectedUser).subscribe(
      data => {
        this.getUsers();
      },
      error => {
        console.log(error);
      }
    );
  }

  createUser = () => {
    this.user.AddUser(this.selectedUser).subscribe(
      data => {
        this.users.push(data);
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }
}