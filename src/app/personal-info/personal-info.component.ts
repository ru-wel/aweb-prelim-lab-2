import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  name: string = 'Reuel Christian Sundiam';
  profession: string = 'Web Developer';
  email: string = 'reuelchristian.sundiam04@gmail.com';
  number: string = '09363112537'
}
