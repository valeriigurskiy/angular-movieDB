import {Component, ElementRef, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-watched-movies-page',
  templateUrl: './watched-movies-page.component.html',
  styleUrls: ['./watched-movies-page.component.css']
})
export class WatchedMoviesPageComponent implements OnInit {

  constructor(private elementRef: ElementRef, private titleService: Title) {
    this.elementRef.nativeElement.ownerDocument.body.style.color = 'white';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }

  ngOnInit(): void {
  }

}
