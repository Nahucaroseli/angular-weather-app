import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularWeather';

  weather:any;
  constructor(private weatherService:ServiceService){

  }

  ngOnInit() {
    
  }

getWeather(cityName:string){
  this.weatherService.getWeather(cityName)
    .subscribe(
      res => {
        this.weather = res;
        console.log(res);
      }
    )

}


submitWeather(cityName:HTMLInputElement){
  this.getWeather(cityName.value);
  cityName.value = "";
  return false;
}

}
