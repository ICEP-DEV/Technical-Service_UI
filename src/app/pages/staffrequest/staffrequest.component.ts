import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; //userform
import { StaffrequestService } from 'src/app/services/staffrequest.service';

@Component({
  selector: 'app-staffrequest',
  templateUrl: './staffrequest.component.html',
  styleUrls: ['./staffrequest.component.scss']
})
export class StaffrequestComponent implements OnInit {

  constructor(private service:StaffrequestService) { }
  errormsg:any; //CREATE VARIABLE TO STORE ERROR MESSAGE
  successmsg:any;

  ngOnInit(): void {
  }

  userForm = new FormGroup ({
    'staff_name': new FormControl('', Validators.required),
    'venue': new FormControl('', Validators.required),
    'createdAt': new FormControl('', Validators.required),
    'description': new FormControl('', Validators.required),
    'staff_number': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
    // 'picture': new FormControl('', Validators.required),   //Validate and send to the db
  });

  userSubmit()
  {
    // console.log(this.userForm.value); //console the results
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.service.sendRequest(this.userForm.value).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
      })
    }
    else
    {
      console.log('all fields required');
      
      this.errormsg = 'All fields required';
    }
  }
}
