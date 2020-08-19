import {Component, ElementRef, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-all-movie-page',
  templateUrl: './all-movie-page.component.html',
  styleUrls: ['./all-movie-page.component.css']
})
export class AllMoviePageComponent implements OnInit {
  public isCollapsed = false;
  form: FormGroup;
  black = 'black';
  white = 'white';
  movies: any[];
  constructor(private httpClient: HttpClient, private elementRef: ElementRef, private router: Router, private titleService: Title) {
    this.httpClient.get<any[]>(`https://api.themoviedb.org/3/discover/movie?api_key=1320623df355b362fd2fcf6f52042ea1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`).subscribe(value => this.movies = value.results);
    this.httpClient.get<any[]>(`https://api.themoviedb.org/3/discover/movie?api_key=1320623df355b362fd2fcf6f52042ea1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`).subscribe(value => {
      for (const movies of value.results) {
        this.movies.push(movies);
      }
    });
    this.httpClient.get<any[]>(`https://api.themoviedb.org/3/discover/movie?api_key=1320623df355b362fd2fcf6f52042ea1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3`).subscribe(value => {
      for (const movies of value.results) {
        this.movies.push(movies);
      }
    });
    this.httpClient.get<any[]>(`https://api.themoviedb.org/3/discover/movie?api_key=1320623df355b362fd2fcf6f52042ea1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3`).subscribe(value => {
      for (const movies of value.results) {
        this.movies.push(movies);
      }
    });
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
    this.elementRef.nativeElement.ownerDocument.body.style.color = 'white';

    this.titleService.setTitle('Movie');
  }

  toMovie(movieID: number): void{
    this.router.navigate(['movie', movieID], {state: {movieID}});
  }

  ngOnInit(): void{

  }

}

