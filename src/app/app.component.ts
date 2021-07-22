import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headers=["Id","Name"];
  employeeId="";
  employeeName="";
  isForUpdate:boolean=false;
  isForAdd:boolean=true;
  eid=false;
  employeeDetails=[]
 addEmployee()
 {
   if(this.employeeId.length!=0 && this.employeeName.length!=0)
   {
     //console.log(this.employeeId);
     //console.log(this.employeeName);
     this.employeeDetails.push({id:this.employeeId,Name:this.employeeName});
     this.employeeId='';
     this.employeeName='';
     this.isForAdd=true;
   }
 }
 deleteEmployee(id)
 {
  // console.log(id);
  this.employeeDetails.splice(id,1);
  
 }
isEmpty()
{
  if(this.employeeDetails.length==0)
  {
    return true;
  }
}
updateEmployee(id)
{
  this.eid=true;
  this.isForAdd=false;
  this.isForUpdate=true;
  this.employeeId=this.employeeDetails[id].id;
  this.employeeName=this.employeeDetails[id].Name;
  this.employeeDetails.splice(id,1,{id:this.employeeId,Name:this.employeeName});
}
updateEmployeeInTable()
{
  //console.log(this.employeeName);
  let cid=this.employeeId;
  for(let i=0;i<this.employeeDetails.length;i++)
  {
    if(this.employeeDetails[i].id==cid)
    {
      this.employeeDetails[i].Name=this.employeeName;
      break;
    }
  }
  this.employeeId='';
  this.employeeName='';
  this.isForAdd=true;
  this.eid=false;
}
}