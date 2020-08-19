import {Component, ElementRef, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  movieInWatchList: number;
  constructor(private titleService: Title, private elementRef: ElementRef) {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
    this.elementRef.nativeElement.ownerDocument.body.style.color = 'white';
    this.titleService.setTitle('Profile');
    this.movieInWatchList = localStorage.length;
    this.test();
  }

  test(): void {

  }

  ngOnInit(): void {
  }

}
