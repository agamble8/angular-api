import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sharp',
  templateUrl: './sharp.component.html',
  styleUrls: ['./sharp.component.css']
})
export class SharpComponent implements OnInit {
  sharp;  //array of json objects

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSharp().subscribe((data)=>{
      console.log(data);
      this.sharp = data['sharp']
    })
  }

}
