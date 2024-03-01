import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './projects.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsUrl = 'assets/data/projects.json';

  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectsUrl);
  }
}
