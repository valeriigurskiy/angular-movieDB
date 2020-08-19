import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './components/app/app.component';
import {SingleMoviePageComponent} from './components/single-movie-page/single-movie-page.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AllMoviePageComponent } from './components/all-movie-page/all-movie-page.component';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {RatingModule} from 'ng-starrating';
import { WatchListPageComponent } from './components/watch-list-page/watch-list-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { WatchedMoviesPageComponent } from './components/watched-movies-page/watched-movies-page.component';

const routes = [
  {path: '', component: AllMoviePageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'watch-list', component: WatchListPageComponent},
  {path: 'movie/:id', component: SingleMoviePageComponent},
  {path: 'watched-movies', component: WatchedMoviesPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SingleMoviePageComponent,
    AllMoviePageComponent,
    WatchListPageComponent,
    ProfilePageComponent,
    WatchedMoviesPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
