import { Entry, createClient } from 'contentful';
import { Observable, from } from 'rxjs';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const CONFIG = {
  space: 'yfvt5243ypo2',
  accessToken: '9IgzFzIUQM15fdmieSclvFp3_aOsjA0MCPWLHVK8iNY',
  contentTypeIds: {
    //The property name angularPost can be whatever
    //what matters in the value which is the content type Id.
    blog: 'reggetonBlog'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  getPosts(query?: object): Observable<Entry<any>[]> {
    return from(
      this.cdaClient.getEntries({
        ...Object,
        content_type: CONFIG.contentTypeIds.blog,
        query
      })
    ).pipe(map(posts => posts.items));
  }

  getPost(id: string): Observable<Entry<any>> {
    return from(this.cdaClient.getEntry(id));
  }

  constructor() { }
}
