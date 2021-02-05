import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getQuestions(sessionId: string) {
    return this.http.get<IQuestion[]>(`${this.URI}/sessions/${sessionId}/questions`);
  }

  addQuestion(sessionId: string, question: string) {
    const body = {
      question: question
    }

    return this.http.post(`${this.URI}/sessions/${sessionId}/questions`, body);
  }

  updateQuestion(questionId: string | unknown, userName: string, number: number) {
    const body = {
      userName: userName,
      number: number
    }

    return this.http.put(`${this.URI}/questions/${questionId}`, body);
  }
}
