import { Component, Input, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

  onSendForm(email){
    // alert('Formulario enviado')
    console.log(email.value)
    this.status = "Formulario enviado con exito"
  }

  defaultForm(){
    this.defaultName="Cristian"
  }

}
