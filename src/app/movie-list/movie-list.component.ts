import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  

  constructor(private moviesService: MoviesService) { }
  responseData;

  ngOnInit(): void {
    this.moviesService.getData().subscribe((response) => {
      this.responseData = response;
      console.log(this.responseData);
    });
  }

}
