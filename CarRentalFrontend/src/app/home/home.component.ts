import { Component, OnInit } from '@angular/core';
import { GetCarsServiceService } from './get-cars-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private getCarService:GetCarsServiceService) { }

  ngOnInit(): void {
  }

  getCars(){
    this.getCarService.getAllCars().subscribe((data)=>{
      console.log(data);
    });
  }

}
