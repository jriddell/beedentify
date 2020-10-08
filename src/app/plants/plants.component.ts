import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class InsectsComponent implements OnInit {
  type: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
