import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evenOddGame';
  evenNumbers: Array<number> = new Array<number>();
  oddNumbers: Array<number> = new Array<number>();


  onEvenNumber(event: { num: number }) {
    console.log("from even listener", event);
    this.evenNumbers.push(event.num)
  }

  onOddNumber(event: { num: number }) {
    this.oddNumbers.push(event.num)

  }
}
