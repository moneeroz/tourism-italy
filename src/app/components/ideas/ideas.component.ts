import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { prohibitedWordsValidator } from 'src/app/custom-validators';
import { CityNamesService } from 'src/app/services/city-names.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss'],
})
export class IdeasComponent {
  cities!: string[];
  ideaForm;

  constructor(
    private cityNamesService: CityNamesService,
    formBuilder: FormBuilder
  ) {
    this.cities = this.cityNamesService.getCityNames();

    this.ideaForm = formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          prohibitedWordsValidator(/tourist|nothing/gi),
        ]),
      ],
      age: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      city: ['', Validators.required],
      idea: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(100),
          prohibitedWordsValidator(/nothing/gi),
        ]),
      ],
    });
  }

  onSubmit() {
    console.log(this.ideaForm.value);
    this.ideaForm.reset();
  }

  // Getter methods

  get name() {
    return this.ideaForm.get('name');
  }

  get age() {
    return this.ideaForm.get('age');
  }

  get email() {
    return this.ideaForm.get('email');
  }

  get city() {
    return this.ideaForm.get('city');
  }

  get idea() {
    return this.ideaForm.get('idea');
  }
}
