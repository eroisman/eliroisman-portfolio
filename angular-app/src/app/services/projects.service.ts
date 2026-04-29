import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, catchError } from 'rxjs';
import { of } from 'rxjs';
import { Project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private readonly http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('data/projects.json').pipe(
      catchError(() => this.http.get<Project[]>('assets/data/projects.json')),
      map((projects: Project[]) =>
        [...projects].sort((first, second) => {
          const firstOrder = first.order ?? Number.POSITIVE_INFINITY;
          const secondOrder = second.order ?? Number.POSITIVE_INFINITY;

          if (firstOrder !== secondOrder) {
            return firstOrder - secondOrder;
          }

          return first.title.localeCompare(second.title, 'fr');
        })
      ),
      catchError((error: unknown) => {
        console.error('Error loading projects:', error);
        return of([]);
      })
    );
  }

  getFeaturedProjects(limit = 4): Observable<Project[]> {
    return this.getProjects().pipe(
      map((projects: Project[]) =>
        projects.filter((project: Project) => project.featured !== false).slice(0, limit)
      )
    );
  }

  getProjectBySlug(slug: string): Observable<Project | undefined> {
    const normalizedSlug = decodeURIComponent(slug).trim().toLowerCase();

    return this.getProjects().pipe(
      map((projects: Project[]) =>
        projects.find((project: Project) => project.slug.trim().toLowerCase() === normalizedSlug)
      ),
      catchError((error: unknown) => {
        console.error('Error loading project by slug:', error);
        return of(undefined);
      })
    );
  }
}
