import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
=======
>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class MovieService {
  API_KEY = 'a486995b02bc67cf6a8ae47a6d019bd5';
  

  constructor(private http: HttpClient) { }

  getMovies() {
    const api = `https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=${this.API_KEY}`;
    return this.http.get(api);
  }

  getMovie(id: number) {
    console.log(`getMovie ${id} called`)
    const api = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${this.API_KEY}`;
    return this.http.get(api);
  }
  getMovieList(list_id: number) {
    const api = `https://api.themoviedb.org/3/discover/movie?with_genres=${list_id}&api_key=${this.API_KEY}&language=en-US`;
    return this.http.get(api);
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${term}`;
    return this.http.get(api);
  }

  getPopular() {
    const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }
  
  getUpcoming() {
    const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }
}
=======
export class MoviesService {
  // API_KEY = 'a486995b02bc67cf6a8ae47a6d019bd5';

  constructor(private httpClient: HttpClient) { }

  getData() {
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=a486995b02bc67cf6a8ae47a6d019bd5';

    return this.httpClient.get(url);
  }


}
>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98
