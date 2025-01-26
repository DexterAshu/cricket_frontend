import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private notyf: Notyf | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    // Initialize Notyf only in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.notyf = new Notyf({
        duration: 3000,
        ripple: true,
        position: { x: 'right', y: 'top' },
        dismissible: true,
      });
    }
  }

  success(message: string): void {
    if (this.notyf) {
      this.notyf.success(message);
    }
  }

  error(message: string): void {
    if (this.notyf) {
      this.notyf.error(message);
    }
  }

  warning(message: string): void {
    if (this.notyf) {
      this.notyf.open({
        type: 'warning',
        message,
      });
    }
  }
}
