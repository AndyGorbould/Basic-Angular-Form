import { Component, OnInit } from '@angular/core';
import { AddFriendServiceService } from '../add-friend-service.service';
import { Friend } from '../friend';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  languages: string[] = ['HTML', 'CSS', 'JS', 'TS', 'Carbon', 'Rust'];
  testVariable: string = 'TEST VARIABLE';
  friendModel: Friend = new Friend('', '', '', 0, '');

  constructor() {}

  formSubmit(friendForm: object) {
    // object will probably change
    console.log(friendForm);
    this.addFriend(friendForm);
  }

  ngOnInit(): void {}
}
