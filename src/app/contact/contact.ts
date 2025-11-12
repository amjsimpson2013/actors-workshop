import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from '@angular/material/icon';
import { Email, EmailForm } from './data-access/email.model';
import { ContactService, EmailStatus } from './data-access/contact-service';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export default class Contact {
  private contactService: ContactService = inject(ContactService);
  emailStatus = this.contactService.emailStatus;
  error = this.contactService.error;

  status: EmailStatus = 'pending';
  emailError: string = '';

  contactForm = new FormGroup<EmailForm>({
    name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    message: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  });

  submit() {
    const email: Email = this.contactForm.value as Email;
    this.contactService.sendEmail$.next(email);
    this.contactForm.reset();
  }
}
