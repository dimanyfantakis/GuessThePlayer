import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/Player';
import { NbaService } from 'src/app/services/nba.service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchString: string;
  searchResult: any;
  playersGuess: Player;
  playersGuesses: Player[] = [];
  playersPredictions: string[][] = [];
  playersPrediction: string[];
  randomPlayerId: number;
  randomPlayerPick: Player;
  showNewGame: boolean = true;
  subscription: Subscription;
  playerWon: boolean;
  playerLost: boolean;
  faBasketball = faBasketball;

  constructor(private nbaService:NbaService, private router: Router, private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => this.showNewGame = value
    );
  }

  ngOnInit() {
    this.pickRandomPlayer();
  }

  searchPlayers() {
    this.nbaService.searchPlayers(this.searchString).subscribe(
      (res) => {
        this.searchResult = res.data
        .filter((player: Player) => {
          return player.position !== "";
        })
    });
  }

  searchPlayer(playersId: number) {
    this.nbaService.searchPlayer(playersId).subscribe(
      (res) => {
        this.playersGuess = res;
        this.playersGuesses.push(this.playersGuess);
        this.validateAnswer();
    });
    this.searchResult = "";
    
  }

  validateAnswer() {
    if (this.randomPlayerPick.id == this.playersGuess.id) {
      this.playerWon = true;
    }else if (this.playersGuesses.length == 7) {
      this.playerLost = true;
    }

    this.playersPrediction = [];
    this.playersPrediction.push(this.randomPlayerPick.position == this.playersGuess.position ? 'green' : 'red');
    this.playersPrediction.push(this.randomPlayerPick.team == this.playersGuess.team ? 'green' : 'red');
    this.playersPrediction.push(this.randomPlayerPick.team.conference == this.playersGuess.team.conference ? 'green' : 'red');
    this.playersPredictions.push(this.playersPrediction);
  }

  pickRandomPlayer() {
    this.randomPlayerId = Math.floor(Math.random() *  3093);
    this.nbaService.searchPlayer(this.randomPlayerId).subscribe(
      (res) => {
        if (res.position === "") {
          this.pickRandomPlayer();
        }else {
          this.randomPlayerPick = res;
        }
    })
  }

  toggleNewGame() {
    this.uiService.toggleNewGame();
    this.playersGuesses = [];
    this.playersPredictions = [];
    this.playerWon = false;
    this.playerLost = false;
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
