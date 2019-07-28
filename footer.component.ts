import { Component, OnInit } from '@angular/core';
import { bhulrajk } from "../bhulrajk";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currStudent: bhulrajk = {
    sid: 991502724, sname: "Rajkamalpreet Singh Bhullar",
    username: "bhulrajk", scampus: "Trafalgar", 
    atitle: "Assignment-3"
  }

  constructor() { }

  ngOnInit() {
  }

}
