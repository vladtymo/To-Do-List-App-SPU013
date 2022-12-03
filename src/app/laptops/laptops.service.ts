import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {

  controllerUrl: string;

  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + 'laptops/';
  }

  getAllLaptops(): Observable<ILaptop[]> {
    return this.http.get<ILaptop[]>(this.controllerUrl + "all");
  }
}

export interface ILaptop {
  id: number;
  model: string;
  processor: string;
  display: string;
  price: number;
  imagePath?: string;
  osId: number;
  osName: string;
}