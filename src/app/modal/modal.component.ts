import { Component, Input } from '@angular/core';
import { MostrarModalService } from '../services/mostrar-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() titulo: string = 'Modal';
  
  constructor(private modalSS:MostrarModalService){}

  cerrarModal():void {
    this.modalSS.$modal.emit(false);
  }

}
