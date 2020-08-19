import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-single-movie-page',
  templateUrl: './single-movie-page.component.html',
  styleUrls: ['./single-movie-page.component.css']
})
export class SingleMoviePageComponent implements OnInit {
  currentRate;
  movie: any;
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private titleService: Title, private config: NgbRatingConfig) {
    this.activatedRoute.params.subscribe(movieID => {
      this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/${movieID.id}?api_key=1320623df355b362fd2fcf6f52042ea1&language=en-US`).subscribe(value => {
        this.movie = value;
        this.titleService.setTitle(value.original_title);
        this.currentRate = value.vote_average / 2;
      });
    });
  }

  runtime(num){
    let hour = 0;
    while (num > 60) {
      hour = hour + 1;
      num = num - 60;
    }
    if (hour >= 2){
      return hour + ' hours ' + num + ' minutes';
    }
    else{
      return hour + ' hour ' + num + ' minutes';
    }
  }

  budgetSetup(budget){
    if (budget === 0){
      return 'No info';
    }
    else{
      return budget;
    }
  }

  sliceDate(date){
    return date.slice(0, -6);
  }

  addMovieToWatchList(movie): void{
    localStorage.setItem(movie.poster_path, movie.poster_path);
  }

  deleteFromWatchList(movie): void{
    localStorage.removeItem(movie.poster_path);
  }

  ngOnInit(): void {
  }
}
