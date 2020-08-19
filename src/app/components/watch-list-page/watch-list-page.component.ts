import {Component, ElementRef, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {
  movie = [];
  watchedMovies = [];
  constructor(private elementRef: ElementRef, private titleService: Title) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      this.movie.push(localStorage.getItem(key).toString());
    }
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
    this.elementRef.nativeElement.ownerDocument.body.style.color = 'white';

    this.titleService.setTitle('Watch list');
  }

  deleteMovie(itemKey): void{
    localStorage.removeItem(itemKey);
    window.location.reload();
  }

  watchedMovie(itemKey): void{
    localStorage.removeItem(itemKey);
    window.location.reload();
  }

  ngOnInit(): void {
  }
}
