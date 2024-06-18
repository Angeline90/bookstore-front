import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.interface';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  user: User = {
    name: '',
    role: '',
    password: '',
  };

  router = inject(Router);
  userService = inject(UserService);

  ngOnInit() {}

  onSubmit() {
    this.userService.addUser(this.user).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        this.router.navigate(['admin/users']);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
}
