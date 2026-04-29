import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Project } from '../../types/project';
import { HomeContent } from '../../types/site-content';
import { ProjectsService } from '../../services/projects.service';
import { SiteContentService } from '../../services/site-content.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  protected content?: HomeContent;
  protected featuredProjects: Project[] = [];
  protected loading = true;

  private readonly cdr = inject(ChangeDetectorRef);

  constructor(
    private readonly siteContentService: SiteContentService,
    private readonly projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.scrollToTop();

    forkJoin({
      content: this.siteContentService.getHomeContent(),
      projects: this.projectsService.getFeaturedProjects(3)
    }).subscribe(({ content, projects }) => {
      this.content = content;
      this.featuredProjects = projects;
      this.loading = false;
      this.scrollToTop();
      this.cdr.detectChanges();
    });
  }

  private scrollToTop(): void {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
}
