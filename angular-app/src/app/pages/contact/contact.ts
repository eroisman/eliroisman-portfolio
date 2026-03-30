import { AfterViewInit, Component, ElementRef } from '@angular/core';

declare const bootstrap: any;

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements AfterViewInit {
  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const forms = this.elementRef.nativeElement.querySelectorAll('.needs-validation');
    forms.forEach((form) => {
      form.addEventListener('submit', (event) => {
        const htmlForm = form as HTMLFormElement;
        if (!htmlForm.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        htmlForm.classList.add('was-validated');
      });
    });
  }

  protected acceptTerms(): void {
    const check = this.elementRef.nativeElement.querySelector('#check') as HTMLInputElement | null;
    if (check) {
      check.checked = true;
    }

    const modalElement = this.elementRef.nativeElement.querySelector('#exampleModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
      modal.hide();
    }
  }
}
