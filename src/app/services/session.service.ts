import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISession } from '../interfaces/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  URI = 'http://localhost:3000/api/sessions';

  constructor(private http: HttpClient) { }

  getSession(sessionId: string) {
    return this.http.get<ISession>(`${this.URI}/${sessionId}`);
  }

  createSession(name: string, type: string) {
    const body = {
      name: name,
      type: type
    }

    return this.http.post(this.URI, body);
  }
}
