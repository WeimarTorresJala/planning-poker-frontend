import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  URI = 'http://localhost:3000/api/sessions';

  constructor(private http: HttpClient) { }

  createSession(name: string, type: string) {
    const body = {
      name: name,
      type: type
    }

    return this.http.post(this.URI, body);
  }
}
