import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddFriendServiceService {
  // private http: HttpClient;
  private url: string = 'http://localhost:9090';
  data: string = 'babababa';

  constructor(private http: HttpClient) {}

  addFriend(_friendForm: object): any {
    this.http.post(this.url, 'data');
  }

  removeFriend() {
    // select using 'email' value, DELETE FROM friendArry WHERE email='this.email' ?
  }

  updateFriend() {}
}
