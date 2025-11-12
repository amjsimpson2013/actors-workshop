import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Email } from './email.model';
import { catchError, exhaustMap, ignoreElements, map, Observable, Subject, switchMap, take, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type EmailStatus = 'pending' | 'sent' | 'error';

interface EmailState {
  status: EmailStatus;
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'api/emails';
  httpClient: HttpClient = inject(HttpClient);

  sendEmail$ = new Subject<Email>();

  private state = signal<EmailState>({
    status: 'pending',
    error: ''
  });

  emailStatus = computed(() => this.state().status);
  error = computed(() => this.state().error);

  constructor() {
    this.sendEmail$.pipe(
      takeUntilDestroyed(),
      exhaustMap((email) => this.saveEmail(email))
    ).subscribe({
      next: () => {
        this.state.set({
          status: 'sent',
          error: ''
        });
      },
      error: (err) => {
        console.log(err);
        this.state.set({
          status: 'error',
          error: err
        });
      }
    })
  }
  
  private saveEmail(email: Email): Observable<unknown> {
    const saveEmailUrl = this.url + '/save';
    return this.httpClient.post(saveEmailUrl, email).pipe();
  }
}
