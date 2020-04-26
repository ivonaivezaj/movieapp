import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MovieService } from '../movies.service';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
<<<<<<< HEAD
  styleUrls: ['./search-criteria.component.css'],
  providers: [ MovieService ]
})
export class SearchCriteriaComponent implements OnInit {
  searchTerms = new Subject<string>();
  movies;
  genre;
  release_date;
  routTo: string

  constructor( private movieService: MovieService, public route: ActivatedRoute) {
    this.movieService.search(this.searchTerms).subscribe(data => {
        this.movies = data;
      },
        err => console.log(err),
        () => console.log(this.movies)
    );

    // this.movieService.search(this.searchTerms).subscribe(data => {
    //   this.genre = data;
    // },
    // err => console.log(err),
    // () => console.log(this.genre)
    // );

    // this.movieService.search(this.searchTerms).subscribe(data => {
    //   this.release_date = data;
    // },
    // err => console.log(err),
    // () => console.log(this.release_date)
    // );
  
  }

  getMovies() {
    this.movieService.getMovies().subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );


  }

  getPopular() {
    this.movieService.getPopular().subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }

  getUpcoming() {
    this.movieService.getUpcoming().subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }

  ngOnInit(): void {
    this.getMovies();
    // get routes
    this.route.url.subscribe(params => {
      this.routTo = params[0].path;

      switch (this.routTo) {
        case 'upcoming':
          //upcoming movies
          this.getUpcoming();
          break;
        case 'popular':
          //get popular movies
          this.getPopular();
          break;

        default:
          //route to home

          break;
      }
    });
  }
  }

=======
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98
