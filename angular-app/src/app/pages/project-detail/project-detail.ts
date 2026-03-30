import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../types/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  protected project?: Project;
  protected loading = true;
  protected hasError = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly projectsService: ProjectsService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.loading = true;
      this.hasError = false;

      const slug = params.get('slug');
      if (!slug) {
        this.project = undefined;
        this.loading = false;
        return;
      }

      this.projectsService.getProjectBySlug(slug).subscribe({
        next: (project) => {
          this.project = project;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading project detail:', error);
          this.project = undefined;
          this.hasError = true;
          this.loading = false;
        }
      });
    });
  }
}
