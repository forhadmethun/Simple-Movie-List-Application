import { Component, OnInit } from '@angular/core';
import { movies } from './movie.mock-data';
import { genreType } from './movie.model';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  allmovies: any[] = movies;
  genreType: any = ['all', 'action' , 'adventure' , 'biography' , 'comedy' , 'crime'
    , 'drama' , 'history' , 'mystery' , 'scifi' , 'sport' , 'thriller'];
  constructor() { }

  ngOnInit() {
    // alert('clicked');
  }
  public open(event, item) {
    event.preventDefault();
    // alert('Open ' + item);
    if (item === 'all') {
      this.allmovies = movies;
      return;
    }
    this.allmovies = [];
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < movies.length; i++) {
      if (movies[i].genres.indexOf(item) > -1) {
        this.allmovies.push(movies[i]);
      }
    }
    // this.allmovies = movies.filter(t => {
    //   return t.genres.include(item);
    // });
  }

}
