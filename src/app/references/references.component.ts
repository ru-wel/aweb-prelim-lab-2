import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  references: String[] = [
    'https://blog.angular-university.io/angular-for/',
    'https://novoresume.com/career-blog/how-to-list-work-experience-on-a-resume',
    'https://www.geeksforgeeks.org/use-nested-components-with-standalone-components-in-angular-17/'
  ]
}
