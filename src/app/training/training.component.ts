import { Component } from '@angular/core';
import { SkillsCertificationComponent } from './skills-certification/skills-certification.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [SkillsCertificationComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  languages: String[] = ['Python', 'Java', 'HTML, CSS, JS, Bootstrap', 'Node.js, Express.js, Vue.js, Angular']
}
