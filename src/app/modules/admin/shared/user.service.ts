import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private BASE_URL = 'http://localhost:8080/users';

  http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/get`);
  }

  getUserById(id: number): Observable<User> {
    return this.getUsers().pipe(
      map(
        (userList: User[]) =>
          userList.find(
            (user: User) => user.id === id
          ) as User
      )
    );
  }

  addUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<User>(`${this.BASE_URL}/add`, user, httpOptions);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
