import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
  }

}
