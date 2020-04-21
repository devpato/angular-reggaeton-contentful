import { Entry, createClient } from 'contentful';
import { Observable, from } from 'rxjs';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const CONFIG = {
  space: 'SPACE KEY',
  accessToken: 'ACCESS TOKEN KEY',
  contentTypeIds: {
    blog: 'reggetonBlog'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  getPosts(query?: object): Observable<Entry<any>[]> {
    return null;
  }


  getPost(id: string): Observable<Entry<any>> {
    return null
  }
}
