import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class ImageService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http
      .get('/api/images')
      .map(res => res);
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    console.log('term is ' +term)
    return this.http
      .get('/api/images?term='  + term)
      .map(res => res)
  }

}
