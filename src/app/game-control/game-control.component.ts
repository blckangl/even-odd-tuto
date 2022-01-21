import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  constructor() {
  }

  timer: number = 0;
  time: any;
  @Output() even: EventEmitter<{ num: number }> = new EventEmitter<{ num: number }>()
  @Output() odd: EventEmitter<{ num: number }> = new EventEmitter<{ num: number }>()

  ngOnInit(): void {
  }

  startGame() {
    this.time = setInterval(() => {
      this.timer++;
      if (this.timer % 2 == 0) {
        this.even.emit({num: this.timer})
      } else {
        this.odd.emit({num: this.timer})
      }
    }, 1000)
  }

  stopGame() {
    clearInterval(this.time)
  }
}
