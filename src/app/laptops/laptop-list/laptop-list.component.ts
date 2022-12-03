import { Component, OnInit } from '@angular/core';
import { ILaptop, LaptopsService } from '../laptops.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {

  laptops: ILaptop[] = [];

  constructor(private laptopsService: LaptopsService) { }

  ngOnInit(): void {
    this.laptopsService.getAllLaptops().subscribe(result => {
      this.laptops = result;
    });
  }

}
