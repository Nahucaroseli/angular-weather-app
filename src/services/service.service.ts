import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private http:HttpClient) {

}


getWeather(cityName:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=72985824df96f93021085de5a572a43b`);
}

}
