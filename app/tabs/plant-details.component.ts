import { Component, OnInit } from '@angular/core';
import { Plant } from '~/interfaces/plant';
import { ActivatedRoute } from "@angular/router";
import { PlantsService } from '~/services/plants.service';
import firebase = require("nativescript-plugin-firebase");

import { Image } from 'tns-core-modules/ui/image';
import { View } from 'tns-core-modules/ui/core/view';
import { Page } from "tns-core-modules/ui/page";
import { screen } from 'tns-core-modules/platform';
import {ScrollEventData, ScrollView} from "tns-core-modules/ui/scroll-view";

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css'],
  moduleId: module.id,
})
export class PlantDetailsComponent implements OnInit {
  plant: Plant;
  title: string;
  image: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.getById(id);
    this.image = '~/images/i' + id + '.jpg';
    this.title = this.plant.name + ' details';
  }

  private getById(id: number){
    this.plant = JSON.parse(localStorage.getItem("all")).filter(plant => plant.id === id)[0];
  }

  onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
    if (scrollView.verticalOffset < 250) {
        const offset = scrollView.verticalOffset / 2;
        if (scrollView.ios) {
            topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
        } else {
            topView.translateY = Math.floor(offset);
        }
    }
  }
}

