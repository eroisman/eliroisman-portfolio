import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../types/project';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected projects: Project[] = [];

  private readonly cdr = inject(ChangeDetectorRef);

  constructor(private readonly projectsService: ProjectsService) {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.cdr.detectChanges();
    });
  }

  protected get enterpriseProjects(): Project[] {
    return this.projects.filter((project) => project.category === 'Projet entreprise');
  }

  protected get schoolProjects(): Project[] {
    return this.projects.filter((project) => project.category === 'Projet école');
  }
}
