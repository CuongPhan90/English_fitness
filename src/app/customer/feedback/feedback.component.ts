import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Feedback } from './feedback';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  feedback = new Feedback('David','Phan','cphan20@csc.com','Testing');

  constructor() { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      yourFeedback: new FormControl()
    });
  }

  save() {
    console.log(this.feedbackForm);
    console.log('Saved: ' + JSON.stringify(this.feedbackForm.value));
  }

}
