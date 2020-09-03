import { Component, OnInit } from '@angular/core';
import ConfettiGenerator from 'confetti-js';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  public open: boolean;

  constructor() { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  openGift() {
    this.open = true;
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    this.playAudio();
  }

  // tslint:disable-next-line:typedef
  playAudio(){
    const audio = new Audio();
    audio.src = '../assets/crowdapplause1.wav';
    audio.load();
    audio.play();
  }

}
