import { Component } from '@angular/core';

export interface Education {
  school: string;
  level: string;
  year: string;
  address: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})

export class EducationComponent {
  education: Education[] = [
    {
      school: 'Holy Family Academy',
      level: 'Elementary',
      year: '2010 - 2016',
      address: 'Sto. Rosario Street, Angeles City, Philippines',
    },
    {
      school: 'Information and Communication Technology High School',
      level: 'Junior & Senior High School',
      year: '2016 - 2022',
      address: 'Sindalan, MacArthur Hwy, San Fernando, Pampanga',
    },
    {
      school: 'Holy Angel University',
      level: 'College',
      year: '2022 - Present',
      address: '#1 Holy Angel St, Angeles City, Pampanga',
    }
  ];
}