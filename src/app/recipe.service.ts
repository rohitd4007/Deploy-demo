import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json');
  }
}
