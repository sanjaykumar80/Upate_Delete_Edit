import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  usersData:any;
  constructor( private ApiService:UsersService) { 
    
    
  }

  ngOnInit(): void {
    this.getData();
  }
  displayedColumns: string[] = ['fname', 'mobile', 'address', 'gender','email'];
  dataSource = ELEMENT_DATA;


getData(){
  this.ApiService.getAllUsers().subscribe(responce =>{
    console.log("users",responce)
    this.usersData=responce;
  })
}
}
export interface PeriodicElement {
  fname: string;
  mobile: number;
  address: number;
  gender: string;
  email:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  
  
];
