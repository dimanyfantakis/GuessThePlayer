import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  @Input() guesses: Player[];
  @Input() predictions: string[][];

  constructor() { }

  ngOnInit() {
  }

}
