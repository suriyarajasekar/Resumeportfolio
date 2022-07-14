import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Emp2Service } from '../share/emp2.service';
import { Employee } from './emp.model';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  formValue!: FormGroup;
  employeeobj:Employee=new Employee();
  employeeData!:any;

  constructor(private ser:Emp2Service,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({number:0,name:['']})
    this.getAllEmployee();
  }

  postemp()
  {
   // alert("hai..")
    this.employeeobj.id=this.formValue.value.number;
    this.employeeobj.name=this.formValue.value.name;
    // alert(this.employeeobj.name)
    // alert(this.employeeobj.number)
    // ................................................
    // let aa:Number=0;
    // let aa1:String='';
    //  aa=document.getElementById("number");
    //  aa1=document.getElementById("name");
    // this.employeeobj.number=90
    // this.employeeobj.name='jjj'
    // this.employeeobj.number=stunumber;
    // this.employeeobj.name=stuname;
   // this.ser.postEmployee(this.employeeobj)
    this.ser.postEmployee(this.employeeobj)
    .subscribe(res => {
        console.log(res);
        alert("Student Added Successfully")
        this.getAllEmployee();
      },
    // this.ser.postemp(this.employeeobj)
    // .subscribe(res =>{
    //   console.log(res);
    //   alert("added");
    //   this.formValue.reset();
      
    // },
    err =>{
      console.log("error add")

    })
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.ser.getEmployee()
      .subscribe(res => {
        this.employeeData = res;
      })
      //console.log(this.employeeData)
  }

  update()
  {
    this.employeeobj.id=this.formValue.value.number;
    this.employeeobj.name=this.formValue.value.name;
    this.ser.updateemployee(this.employeeobj,this.employeeobj.id)
    .subscribe(res => {
        console.log(res);
        alert("Student updata Successfully")
        this.getAllEmployee();
      }
      
    )
    this.getAllEmployee();
  }


  OnEdit(row:any){
    this.formValue.controls['number'].setValue(row.id)
     this.formValue.controls['name'].setValue(row.name)
     
   }


  delete1(row:any){
    this.ser.delete(row.id)
    .subscribe(res =>{
      alert("delete")
      this.getAllEmployee();
    })
this.getAllEmployee();
  }


  
}
