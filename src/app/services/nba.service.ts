import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  private searchUrl :string;
  private playersUrl: string;

  constructor(private http:HttpClient) { }

  searchPlayers(query: string): Observable<any> {
    this.searchUrl = "https://www.balldontlie.io/api/v1/players?search=" + query;
    return this.http.get<any>(this.searchUrl, httpOptions);
  }

  searchPlayer(playersId: number) {
    this.playersUrl = "https://www.balldontlie.io/api/v1/players/" + playersId;
    return this.http.get<any>(this.playersUrl, httpOptions);
  }

  getAllPlayers(page: number) {
    this.playersUrl = "https://www.balldontlie.io/api/v1/players?per_page=100?page=" + page;
    return this.http.get<any>(this.playersUrl, httpOptions);
  }
}
