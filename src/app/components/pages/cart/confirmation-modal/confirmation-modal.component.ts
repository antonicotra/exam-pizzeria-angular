import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal',
  imports: [RouterLink],
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent {
  
  @Input() isVisible: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
