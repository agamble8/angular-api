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

  // made prescribed changes to Startup.cs as mentioned in:
  // https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-5.0#set-the-allowed-origins
  // and 
  // https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-5.0

  // also authorized the possible security risk in the browser to allow CORS

  ngOnInit(): void {
    this.apiService.getSharp().subscribe((data)=>{
      console.log("C-Sharp API");
      console.log(data);
      this.sharp = data
    });

      }

}
