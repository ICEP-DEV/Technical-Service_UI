import { Component, OnInit } from '@angular/core';
import { ViewrequestArtisanService } from 'src/app/services/viewrequest-artisan.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})
export class TechnicianComponent implements OnInit {

  constructor(private service:ViewrequestArtisanService) { }
  readData:any;
  id:any;
  successmsg:any;

  ngOnInit(): void {
    this.viewRequest();
  }

  //Delete record
  deleteID(id:any)
  {
    console.log(id, 'deleteid==>');
    this.service.deleteRequest(id).subscribe((res)=>{
      console.log(id, 'deleteres==>');
      this.successmsg = res.messasge;
      this.viewRequest();
    })
    
  }
  //Get record
  viewRequest()
  {
    this.service.viewRequest().subscribe((res)=>{
      console.log(res, "res==>");
      this.readData = res.data; //data is an array
    });
  }

}
