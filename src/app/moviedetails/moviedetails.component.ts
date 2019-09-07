import { Component, OnInit } from '@angular/core';
import { movies } from '../movies/movie.mock-data';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  allmovies: any[] = movies;
  id: string = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute) { }
  param: string = '';
  movie: any = null;
  ngOnInit() {
    const url = new URL(document.URL);
    const searchParams = new URLSearchParams(url.search);
    // console.log(searchParams.get('c'));  // outputs "m2-m3-m4-m5"
    // this.param = (new URLSearchParams((document.URL).search)).get("id");
    this.param = searchParams.get('id');
    // alert(this.movie);

    // tslint:disable-next-line:only-arrow-functions
    // this.movie = this.allmovies.filter((itm) => {
    //   console.log(itm.id + '>> ' + this.param);
    //   return itm.id === this.param;
    // });
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.allmovies.length; i++){
      // tslint:disable-next-line:triple-equals
      if (this.allmovies[i].id == this.param) {
        console.log("!!!=>  " + i);
        this.movie = this.allmovies[i];
        console.log(this.movie.description);

        break;
      }
    }


    // console.log(this.movie);

  }

}
