import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  currently;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getWeather().subscribe((data)=>{
      console.log(data);
      this.currently = data['weather'][0]['main'];
      console.log(this.currently);
    });
  }

}
