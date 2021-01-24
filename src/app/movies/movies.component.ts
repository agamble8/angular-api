import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies;
  image_path = "http://image.tmdb.org/t/p/w300/";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMovies().subscribe((data)=>{
      console.log("movies");
      console.log(data);
      this.movies = data['results'];
    })
  }

}
