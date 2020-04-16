import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=a486995b02bc67cf6a8ae47a6d019bd5';

    return this.httpClient.get(url);
  }
}
