import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { IQuestion } from '../../interfaces/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sessionId = params['sessionId'];
    });

    this.getQuestions();
  }

  sessionId: string = '';

  getQuestions() {
    this.questionService.getQuestions(this.sessionId)
      .subscribe(
        (res: IQuestion[]) => {
          this.questions = [];

          for (let index = 0; index < res.length; index++) {
            this.questions.push(res[index].question);
          }
        },
        err => console.log(err)
      );
  }

  questions: string[] = [];

  addQuestion(question: HTMLInputElement): boolean {
    if (question.value !== "") {
      this.questionService.addQuestion(this.sessionId, question.value)
        .subscribe(
          res => {
            this.getQuestions();
          },
          err => console.log(err)
        );
    }

    return false;
  }

  btnClick() {
      this.router.navigate([`/create/${this.sessionId}/user`]);
  };
}
