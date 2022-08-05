import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {}
}
