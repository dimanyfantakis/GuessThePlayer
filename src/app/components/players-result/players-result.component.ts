import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-players-result',
  templateUrl: './players-result.component.html',
  styleUrls: ['./players-result.component.css']
})
export class PlayersResultComponent implements OnInit {
  @Input() playersResult: any;
  @Output() onPlayerGuess: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  guessPlayer(playersId: number) {
    this.onPlayerGuess.emit(playersId);
  }
}
