import { Component, OnInit } from '@angular/core';

import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
