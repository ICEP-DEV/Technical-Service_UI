import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Validate } from '../../models/validate'; //import the class
import { Feedback } from '../../models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  validateModel = new Validate('','','','','','','',null!, null!)  //add an argument for date

  regForm: Feedback = new Feedback;
  constructor() { }

  ngOnInit(): void {
  }

}
