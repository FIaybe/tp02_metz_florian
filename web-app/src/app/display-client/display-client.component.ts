import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/core/Client';

@Component({
  selector: 'app-display-client',
  templateUrl: './display-client.component.html',
  styleUrls: ['./display-client.component.scss']
})
export class DisplayClientComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
