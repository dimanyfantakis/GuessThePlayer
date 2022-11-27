import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showNewGame: boolean = true;
  private subject = new Subject<any>();

  constructor() { }
  
  toggleNewGame(): void {
    this.showNewGame = !this.showNewGame;
    this.subject.next(this.showNewGame);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
