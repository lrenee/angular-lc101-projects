import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool Pics';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://livability.com/sites/default/files/Florida-Secret-Beaches.jpg';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wmSP3dfSt9y2vi3Ic1-9vqsAdXEDavqMuDUU_n4rmtcdmXjP0g';

  constructor() { }

  ngOnInit() {
  }

}