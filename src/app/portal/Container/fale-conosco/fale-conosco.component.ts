import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from 'src/app/portal/Services/pages.service';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {
  contatoFormGroup: FormGroup;
  constructor(private fb: FormBuilder, public router: Router, public service: PagesService) { }

  ngOnInit() {
    this.contatoFormGroup = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      company: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      messageform: new FormControl('', [Validators.required])
    });
  }
  get form() {
    return this.contatoFormGroup.controls;
  }
  ngRegister() {

    this.service.saveContato(this.contatoFormGroup.value).subscribe(resp => {
      alert('Contato enviado com sucesso!');
    })
  }

}
