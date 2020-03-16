import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageNameService {
  pageName = new EventEmitter<string>();
  constructor() { }
}
