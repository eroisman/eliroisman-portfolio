import { ChangeDetectorRef, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ResumeContent } from '../../types/site-content';
import { SiteContentService } from '../../services/site-content.service';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume implements OnInit {
  protected content?: ResumeContent;

  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);

  constructor(private readonly siteContentService: SiteContentService) {}

  ngOnInit(): void {
    this.siteContentService
      .getResumeContent()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((content) => {
        this.content = content;
        this.cdr.detectChanges();
      });
  }
}
