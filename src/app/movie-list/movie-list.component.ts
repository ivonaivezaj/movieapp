import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movies.service';
import { Location } from '@angular/common';
import { LocalStorageService } from '../local-storage.service'
=======
import { MoviesService } from '../movies.service';
>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
<<<<<<< HEAD
  public movie;
  public genre;
  public showMore : boolean = false;
  public addedToFavorites: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private localStorageService: LocalStorageService) { }
  
    //get a single movie
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(
      data => {
        this.movie = data;
        console.log(data)

      },
      err => console.log(err),
      () => {
        console.log(`genre is ${this.movie.genres[0].id}`);
        this.movieService.getMovieList(this.movie.genres[0].id).subscribe
          (
            data => {
              this.genre = data;

              console.log(this.genre);
            },
            err => console.log(err),
            () => {
              console.log(``);
            }
          )
      }
    );

  }

  addToFavorites(event, movieId) {
    this.localStorageService.storeOnLocalStorage(movieId);
    this.addedToFavorites = true;
  }

moreInfo(event) {
  this.showMore = true;
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getMovie();
  }
=======
  

  constructor(private moviesService: MoviesService) { }
  responseData;

  ngOnInit(): void {
    this.moviesService.getData().subscribe((response) => {
      this.responseData = response;
      console.log(this.responseData);
    });
  }

>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98
}
