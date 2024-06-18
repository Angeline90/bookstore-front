import { Component, Input, OnInit, inject } from '@angular/core';
import { User } from '../../shared/user.interface';
import { UserService } from '../../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit {
  @Input()
  user?: User;

  userDetails$!: Observable<User>;

  route = inject(ActivatedRoute);
  userService = inject(UserService);
  router = inject(Router);

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.setUserDetails(+userId);
    } else {
      console.error('ID utilisateur est undefined');
    }
  }

  setUserDetails(id: number): void {
    this.userDetails$ = this.userService.getUserById(id);
  }

  deleteUser(userId: number | undefined): void {
    if (userId) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          console.log('Utilisateur supprimé avec succès.');
        },
        (error) => {
          console.error(
            "Erreur lors de la suppression de l'utilisateur : ",
            error
          );
        }
      );
    } else {
      console.error('ID utilisateur est undefined');
    }
  }
}
