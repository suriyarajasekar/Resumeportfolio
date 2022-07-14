import { Component, OnInit } from '@angular/core';
import { Emp2Service } from '../share/emp2.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  employeeData!:any;
  employeeData1!:any;
  name="ssss";
  position:any;
  contact!:any;
  contact1!:any;
  address:any;
  projects!:any;
  title!:any;
  awards!:any;
  constructor(private ser:Emp2Service) { }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllEmployee1();
    this. getcontact();
    this. getcontact1();
    this.getprojects();
     this.name=this.employeeData1.value.name;
     console.log(this.name)
    this.position=this.employeeData1.value.position;
    console.log(this.projects.title)
  }
  getcontact() {
    this.ser.getContact()
      .subscribe(res => {
        this.contact = res;
      })
      console.log(this.contact.value.phonenumber)
      this.address=this.contact.value.phonenumber;

  }
  getcontact1() {
    this.ser.getContact1()
      .subscribe(res => {
        this.contact1 = res;
      })
      // console.log(this.contact.value.phonenumber)
      // this.address=this.contact.value.phonenumber;

  }
  getprojects() {
   // alert("hi...")
    this.ser.getProjects()
      .subscribe(res => {
        this.projects = res;
      })
      // console.log(this.contact.value.phonenumber)
       this.title=this.projects.value.title;

  }
  getAllEmployee() {
    this.ser.getEmployee()
      .subscribe(res => {
        this.employeeData = res;
      })
      //console.log(this.employeeData)
  }
  getAllachievement() {
    this.ser.getAchievement()
      .subscribe(res => {
        this.awards = res;
      })
      //console.log(this.employeeData)
  }

  //...............................................

  getAllEmployee1() {
    this.ser.getEmployee1()
      .subscribe(res => {
        this.employeeData1 = res;
      })
      console.log(this.employeeData1)
    //  this.name=this.employeeData1.name;
   // console.log(this.name)
  }

}
