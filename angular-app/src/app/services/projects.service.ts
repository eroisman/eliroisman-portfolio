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
      catchError((error) => {
        console.error('Error loading projects:', error);
        return of([]);
      })
    );
  }

  getProjectBySlug(slug: string): Observable<Project | undefined> {
    const normalizedSlug = decodeURIComponent(slug).trim().toLowerCase();

    return this.getProjects().pipe(
      map((projects) =>
        projects.find((project) => project.slug.trim().toLowerCase() === normalizedSlug)
      ),
      catchError((error) => {
        console.error('Error loading project by slug:', error);
        return of(undefined);
      })
    );
  }
}
