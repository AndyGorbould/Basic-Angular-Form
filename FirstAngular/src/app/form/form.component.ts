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

  constructor(private addFriend: AddFriendServiceService) {}

  formSubmit(friendForm: object) {
    // object will probably change
    console.log(this.friendModel);
    this.addFriend.addFriend(this.friendModel).subscribe();
    // new Friend() = AddFriendServiceService.addFriend(friendForm);
  }

  ngOnInit(): void {}
}
