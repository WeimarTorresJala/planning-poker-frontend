import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  URI = 'http://localhost:3000/api/sessions';

  constructor(private http: HttpClient) { }

  getQuestions(sessionId: string) {
    return this.http.get<IQuestion[]>(`${this.URI}/${sessionId}/questions`);
  }

  addQuestion(sessionId: string, question: string) {
    const body = {
      question: question
    }

    return this.http.post(`${this.URI}/${sessionId}/questions`, body);
  }
}
