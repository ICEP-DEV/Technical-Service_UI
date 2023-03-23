import { Component, OnInit } from '@angular/core';
import { ViewrequestService } from 'src/app/services/viewrequest.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor( private service:ViewrequestService) { }

  readData:any;
  id:any;
  successmsg:any;

  ngOnInit(): void {
    //VIEWS ALL REQUESTS
    this.viewRequest();
  }

  deleteID(id:any)
  {
    console.log(id, 'deleteid==>');
    this.service.deleteRequest(id).subscribe((res)=>{
      console.log(res,"deleteres=>");
      this.successmsg = res.messasge;
      
    });
  }

  viewRequest()
  {
    this.service.viewRequest().subscribe((res)=>{
      console.log(res, "res==>");
      this.readData = res.data; //data is an array
    });
  }

  //GET BY ID
  viewID(id:any)
  {
    console.log(id, 'deleteid==>');
    this.service.viewRequest1(id).subscribe((res)=>{
      console.log(res,"deleteres=>");
      this.successmsg = res.messasge;
      
    });
  }
}
