import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HashtagsService {
  constructor(private http: Http) {}

  getAllHashtags() {
    return this.http.get('/api/hashtags')
      .map(res => res.json());
  }
}