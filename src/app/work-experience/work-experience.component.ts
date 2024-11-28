import { Component } from '@angular/core';

export interface workExperience {
  position: string;
  year: string;
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})

export class WorkExperienceComponent {
  work: workExperience[] = [
    {
      position: 'Freelance Video Editor',
      year: '2022 - Present'
    },
    {
      position: 'Freelance Developer',
      year: '2024 - Present'
    }
  ];
}
