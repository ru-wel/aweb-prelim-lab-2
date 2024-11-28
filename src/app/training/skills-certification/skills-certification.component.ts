import { Component } from '@angular/core';

export interface certification{
  certificate: string;
  year: string;
}

@Component({
  selector: 'app-skills-certification',
  standalone: true,
  imports: [],
  templateUrl: './skills-certification.component.html',
  styleUrl: './skills-certification.component.css'
})

export class SkillsCertificationComponent {
  certificate: certification[] = [
    {
      certificate: 'Comptia ITF+',
      year: '2023'
    },
    {
      certificate: 'Cisco Certification in Introduction to Networks',
      year: '2024'
    },
    {
      certificate: 'Cisco Certification in Cybersecurity Essentials',
      year: '2024'
    }
  ];
}
