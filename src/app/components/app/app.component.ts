import {Component, ElementRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { NgForm} from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  black = 'black';
  white = 'white';
  constructor(private elementRef: ElementRef, private router: Router, private titleService: Title) {
    this.form = new FormGroup(
      {
        changeTheme: new FormControl('', [Validators.required]),
      }
    );
    this.titleService.setTitle('Movie');
  }

  toMoviesPage(): void{
    this.router.navigate(['']);
    this.titleService.setTitle('Movie');
  }

  toWatchListPage(): void{
    this.router.navigate(['watch-list']);
    this.titleService.setTitle('Watch List');
  }

  toProfile(): void{
    this.router.navigate(['profile']);
    this.titleService.setTitle('Profile');
  }
}


