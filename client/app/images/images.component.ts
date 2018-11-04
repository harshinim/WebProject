import { Component , OnInit } from '@angular/core';

import { ImageService } from '../services/image.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit {

  images: Object;
  searchTerm$ = new BehaviorSubject<string>('');
  isLoading = true;


  constructor(private imageService: ImageService) { }


  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imageService.search(this.searchTerm$).subscribe(
      data => {this.images = data, console.log('data is ' + JSON.stringify(data));},
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
