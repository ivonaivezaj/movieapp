import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  responseData;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getData().subscribe((response) => {
      this.responseData = response;
      console.log(this.responseData);
    });
  }

}
