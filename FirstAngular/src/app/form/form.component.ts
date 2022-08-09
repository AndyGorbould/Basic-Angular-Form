import { NgForOf } from '@angular/common';
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
  allFriends: Array<Friend> = [];

  constructor(private addFriend: AddFriendServiceService) {}

  formSubmit(friendForm: object) {
    // object will probably change
    console.log(this.friendModel);
    this.addFriend.addFriend(this.friendModel).subscribe();
    this.ngOnInit();
    // new Friend() = AddFriendServiceService.addFriend(friendForm);
  }

  getAllFriends(friendForm: object) {
    // object will probably change
    console.log(this.friendModel);
    this.addFriend.addFriend(this.friendModel).subscribe();
    // new Friend() = AddFriendServiceService.addFriend(friendForm);
  }

  public async getFriends(): Promise<any> {
    let data = await fetch('http://localhost:9090/allFriends');
    console.log(data);
    return await data.json();
    // returns raw JSON only
  }

  ngOnInit(): void {
    this.getFriends().then((data) => {
      for (let index = 0; index < data.length; index++) {
        let aFriend = new Friend(
          data[index].firstName,
          data[index].lastName,
          data[index].email,
          data[index].phoneNumber,
          data[index].favouriteLanguage
        );
        this.allFriends.push(aFriend);
        // conv. from JSON to Friend class & push to array[] allFriends
      }
      console.log(this.allFriends);

      // console.log(data);
    });
  }
}
