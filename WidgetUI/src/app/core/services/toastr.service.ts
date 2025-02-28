import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService,
  ) { }

  showSuccess(message: string, title: string = "Success") {
    this._messageService.add({ severity: 'success', summary: title, detail: message });
  }

  showInfo(message: string, title: string = "Info") {
    this._messageService.add({ severity: 'info', summary: title, detail: message, life: 10000 });
  }

  showError(message: string, title: string = "Error") {
    this._messageService.add({ severity: 'error', summary: title, detail: message });
  }

  showWarn(message: string, title: string = "Warning") {
    this._messageService.add({ severity: 'warn', summary: title, detail: message });
  }

  confirm(method: () => void, header = null, message = null) {
    this._confirmationService.confirm({
      message: message || 'Are You Sure You Want To Proceed?',
      header: header || 'Confirmation',
      icon: 'bi bi-exclamation-triangle mx-2',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      accept: () => {
        method();
      },
      reject: () => { },
    });
  }
}
