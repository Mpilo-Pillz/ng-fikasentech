import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { Skill } from './skills.model';

@Component({
  selector: 'app-your-component',
  templateUrl: 'skills.component.html',
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private skillService: SkillsService) {}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((skill) => (this.skills = skill));
  }
}
