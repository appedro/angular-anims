import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],

})
export class GalleryComponent implements OnInit {
  
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(()=>this.router.navigate(["/"]), 2000)
  }

}
