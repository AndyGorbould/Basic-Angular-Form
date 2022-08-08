import { Component } from '@angular/core';
import { Friend } from './friend'; // import the class here
import { AddFriendServiceService } from './add-friend-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // http = new HttpClientModule;
  title = 'FirstAngular';
  url = '';
  data = '';

  // constructor(private http: HttpClient) {}

  postRequest() {
    // this.posts = this.http.post(url, data);
  }
}
