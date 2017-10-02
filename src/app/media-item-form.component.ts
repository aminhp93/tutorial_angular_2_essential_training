import { Component }              from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  ngOnInit(){
    this.form = new FormGroup({
      medium: new FormControl(''),
      name: new FormControl('', Validators.compose([
          Validators.pattern('[\\w\\-\\s\\/]+'),
          Validators.required
        ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
    });
  }

  yearValidator(control){
    if (control.value.trim().length === 0){
      return null
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2100;

    if (year >= minYear){
      return null;
    } else {
      return { 'year': {
        min: minYear,
        max: maxYear
      }};
    }
  }

  onSubmit(mediaItem){
    console.log(mediaItem);
  }
}