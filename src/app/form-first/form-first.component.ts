import { Component, Input, OnInit } from '@angular/core';
// import { threadId } from 'worker_threads';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status = "Formulario no enviado"
  defaultName = ""
  displayPassword = false
  lightStatus = "GREEN"
  names = ["cris", "tian", "david", "samuel"]

  // @Input() parentDataToChild
  @Input('parentDataToChild') messageForParent

  courses = []
  errorMessage = []

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    // this.courses = this.CourseService.getCourses()
    this.CourseService.getCourses().subscribe(data=>this.courses=data,
                                              error => this.errorMessage = error)
  }

  onSendForm(email){
    // alert('Formulario enviado')
    console.log(this.courses)
    console.log(email.value)
    this.status = "Formulario enviado con exito"
  }

  defaultForm(){
    this.defaultName="Cristian"
  }

}
