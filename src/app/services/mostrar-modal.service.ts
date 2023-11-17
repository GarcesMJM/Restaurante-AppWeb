import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarModalService {

  constructor() { }

  $modal = new EventEmitter<any>();
}
