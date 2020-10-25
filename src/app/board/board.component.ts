import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  // declaring the properties of variale
  squares: any[];
  xIsNext: boolean;
  winner: string;
  constructor() { }

  // displaying new game as soon as game loads in server
  ngOnInit(): void {
    this.newGame();
  }

  // specifying the intial state of square and other details when new game starts
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  // assigning a letter for two players "X" for first player and "O" for second player
  get player() : string{
    return this.xIsNext ? 'X' : 'O';
  }

  // logic to determine winner based on moves of each player
  makeMove(id : number){
    if(!this.squares[id]){
      this.squares.splice(id, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  // array to make calculation of three consecutive letters vertical, horizantal and diagonal
  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // for loop to loop through each move to calculate three consecutive letters
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

}

