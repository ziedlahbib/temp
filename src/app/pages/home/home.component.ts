import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item:any=[];
  images:any[]=[
    {
      previewImageSrc:"assets/images.png",
      thumbnailImageSrc:"assets/images.png",
      title:"zied",
      alt:"zziiieidiidiidi"
    },
    {
      previewImageSrc:"assets/images.png",
      thumbnailImageSrc:"assets/images.png",
      title:"ziedsssss",
      alt:"zziiieidiidiidi"
    },
    {
      previewImageSrc:"assets/images.png",
      thumbnailImageSrc:"assets/images.png",
      title:"ziedsssss",
      alt:"zziiieidiidiidi"
    },
    {
      previewImageSrc:"assets/images.png",
      thumbnailImageSrc:"assets/images.png",
      title:"ziedsssss",
      alt:"zziiieidiidiidi"
    },
    {
      previewImageSrc:"assets/images.png",
      thumbnailImageSrc:"assets/images.png",
      title:"ziedsssss",
      alt:"zziiieidiidiidi"
    },
    {
      previewImageSrc:"assets/images.png",
      thumbnailImageSrc:"assets/images.png",
      title:"ziedsssss",
      alt:"zziiieidiidiidi"
    }
  ]
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
