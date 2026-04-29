import { AfterViewInit, ChangeDetectorRef, Component, DestroyRef, ElementRef, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContactContent } from '../../types/site-content';
import { SiteContentService } from '../../services/site-content.service';

declare const bootstrap: any;

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements AfterViewInit, OnInit {
  protected content?: ContactContent;
  protected safeMapSrc: SafeResourceUrl | null = null;

  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly sanitizer = inject(DomSanitizer);

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly siteContentService: SiteContentService
  ) {}

  ngOnInit(): void {
    this.siteContentService
      .getContactContent()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((content) => {
        this.content = content;
        this.safeMapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(content.map.src);
        this.cdr.detectChanges();
      });
  }

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
