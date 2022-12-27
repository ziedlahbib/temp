import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectItem } from 'primeng/api';
import {MatPaginator, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  start=0;
  end=6;
  item:any=[];
  imagesPagination:any[]=[];
  images:any[]=[
    {
      previewImageSrc:"assets/téléchargement222.jpg",
      thumbnailImageSrc:"assets/téléchargement222.jpg",
      title:"zied",
      alt:"zziiieidiidiidi"
    },
    {
      previewImageSrc:"assets/téléchargement222.jpg",
      thumbnailImageSrc:"assets/téléchargement222.jpg",
      title:"ziedsssss",
      alt:"zziiieidiidiidi"
    },
    {
      previewImageSrc:"assets/téléchargement222.jpg",
      thumbnailImageSrc:"assets/téléchargement222.jpg",
      title:"ziedsssss",
      alt:"zziiieidiidiidi"
    },
    {
      previewImageSrc:"assets/téléchargement222.jpg",
      thumbnailImageSrc:"assets/téléchargement222.jpg",
      title:"ziedsssss",
      alt:"zziiieidiidiidi"
    },
    {
      previewImageSrc:"assets/téléchargement222.jpg",
      thumbnailImageSrc:"assets/téléchargement222.jpg",
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
dataSource: MatTableDataSource<any>=new MatTableDataSource(this.images);;
  constructor() { }

  ngOnInit(): void {
    this.imagesPagination=this.images.slice(this.start, this.end)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  paginate(event:PageEvent) {
    let startIndex = event.pageSize * event.pageIndex;
    this.start = startIndex;
    let endIndex = startIndex + event.pageSize;
    this.end = endIndex;
    if (endIndex > this.images.length) {
      endIndex = this.images.length;
    }
    this.imagesPagination = this.images.slice(startIndex, endIndex);
  }
}
