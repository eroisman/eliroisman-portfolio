import { ChangeDetectorRef, Component, HostListener, inject } from '@angular/core';
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
  protected dropdownOpen = false;

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

  protected toggleProjectsDropdown(event: MouseEvent): void {
    event.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
    this.cdr.detectChanges();
  }

  protected closeProjectsDropdown(): void {
    if (!this.dropdownOpen) {
      return;
    }

    this.dropdownOpen = false;
    this.cdr.detectChanges();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (target?.closest('.dropdown')) {
      return;
    }

    this.closeProjectsDropdown();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeProjectsDropdown();
  }
}
