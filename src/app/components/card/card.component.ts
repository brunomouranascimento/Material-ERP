import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() labelFront: string;
  @Input() labelBack: string;
  @Input() size: string;
  @Input() flippable = false;
  @Input() compactable = false;

  flipped = false;

  constructor() { }

  flipCard() {
    this.flipped = !this.flipped;
  }

  ngOnInit() {
  }

}
