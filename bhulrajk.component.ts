import { Component, OnInit } from '@angular/core';
import { BOOKINFO } from '../myBooks';


@Component({
  selector: 'app-bhulrajk',
  templateUrl: './bhulrajk.component.html',
  styleUrls: ['./bhulrajk.component.css']
})
export class BhulrajkComponent implements OnInit {

  myBooks = BOOKINFO;


  constructor() { }

  onClickMe(index){
    var a = document.getElementById("myList").getElementsByTagName("div");
    var b = document.getElementById("myList").getElementsByTagName("table");
    if (a[index].style.display === 'none') {
      a[index].style.display = 'block';
      b[index].style.display = 'block';
    }
    else {
      a[index].style.display = 'none';
      b[index].style.display = 'none';
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var a = document.getElementById("myList").getElementsByTagName("div");
    var b = document.getElementById("myList").getElementsByTagName("table");

    for (let x=0; x < a.length; x++){
      a[x].style.display="none";
    }

    for (let x=0; x < b.length; x++){
      b[x].style.display="none";
    }
  }

}
