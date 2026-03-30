import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../types/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  protected projects: Project[] = [];
  protected loading = true;
  protected error = false;

  constructor(private readonly projectsService: ProjectsService) {}

  ngOnInit(): void {
    console.log('Projects component initializing...');
    this.projectsService.getProjects().subscribe({
      next: (projects) => {
        console.log('Projects loaded:', projects);
        this.projects = projects;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error in projects component:', err);
        this.error = true;
        this.loading = false;
      },
      complete: () => {
        console.log('Projects loading complete');
      }
    });
  }
}
