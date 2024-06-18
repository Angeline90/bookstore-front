import { Component, Input, OnInit, inject } from '@angular/core';
import { User } from '../../shared/user.interface';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users?: Array<User>;

  router = inject(Router);
  userService = inject(UserService);

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des utilisateurs:',
          error
        );
      }
    );
  }

  addUser() {
    this.router.navigate(['admin/users/create-user']);
  }

  getUserById(userId: number | undefined) {
    this.router.navigate(['admin/users', userId]);
  }
}
