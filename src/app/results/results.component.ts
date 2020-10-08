import { Component, OnInit } from '@angular/core';
import { ImageDataService } from "../image-data.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InsectsComponent } from '../insects/insects.component';
import { PlantsComponent } from '../plants/plants.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Array<any> = [];
  score_total: number = 0;

  constructor(private imgDataSvc: ImageDataService, private modal: NgbModal) { }

  ngOnInit() {
    this.imgDataSvc.image_data.subscribe(res => this.image_dataChanged(res));
  }

  image_dataChanged(image_data) {
    // Update results on image_data change
    this.results = [];
    let scores = {};
    this.score_total = 0;
    for (let image of image_data) {
      if (image['active'] == true) {
        for (let [name, num] of Object.entries(image['score'])) {
          scores[name] = (scores[name] || 0) + 1;
          this.score_total++
        }
      }
    }
    if (this.score_total > 0) {
      for (let [name, score] of Object.entries(scores)) {
        let num_score = Number(score);
        this.results.push({name: name, score: num_score});
        if ((num_score >4 && num_score / this.score_total >0.25) || (num_score >3 && num_score/this.score_total >0.33) || (num_score >=2 && num_score/this.score_total > 0.5)) {
          this.insectModal(name);
        }
      }
    }
  }

  docsURI(name) {
    return encodeURI("assets/docs/" + name + ".html")
  }

  insectModal(type) {
    const insectModal = this.modal.open(PlantsComponent, {size: 'lg', centered: true});
    insectModal.componentInstance.type = type;

  }
}
