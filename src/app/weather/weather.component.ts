import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  @Input() weatherData: data[] = []; // Initialize it here

  searchTerm = "";
  searchedData?: data = undefined; // the property is not required to have a value. It can be undefined, null, or have a value of the specified type (in this case, data).
  
  ngOnInit(): void {

  }

  onChange(value: string | null) {
    this.searchedData = this.weatherData.find(
      ({ name }) => {
        if (value) {
          return name.toLowerCase() === value.toLowerCase();
        }
        return false; // or handle the case where value is null or undefined
      } );
  }
  

}

interface data {
  name: string ;
  temperature: string ;
  wind: string;
  humidity: string;
}
