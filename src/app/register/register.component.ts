import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../shared/services/contact/contact.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  windowDefined: boolean;
  /**
   *
   */
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
    if (typeof window !== 'undefined') {
      this.windowDefined = true;
    }
  }
  save() {
    this.contactService.sendContactForm(this.form.value).then(() => {
      this.router.navigate(['gracias']);
    });
  }
}
