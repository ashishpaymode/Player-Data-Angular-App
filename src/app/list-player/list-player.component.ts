import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {
  @Input() player: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
