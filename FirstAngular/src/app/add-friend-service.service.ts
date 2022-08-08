import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddFriendServiceService {
  // private http: HttpClient;
  private url: string = 'http://localhost:9090/addFriend';
  data: string = 'babababa';

  constructor(private http: HttpClient) {}

  addFriend(_friendModel: object): any {
    return this.http.post(this.url, _friendModel);
  }

  removeFriend() {
    // select using 'email' value, DELETE FROM friendArry WHERE email='this.email' ?
  }

  updateFriend() {}
}
