import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { SessionService } from '../../services/session.service';
import { TypeService } from '../../services/type.service';
import { IQuestion } from '../../interfaces/question';
import { ISession } from '../../interfaces/session';
import { IType } from '../../interfaces/type';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  constructor(private questionService: QuestionService, private sessionService: SessionService, private typeService: TypeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sessionId = params['sessionId'];
      this.userName = params['userName'];
    });

    this.getQuestions();
    this.getSession();
  }

  sessionId: string = '';
  userName: string = '';

  condition: boolean = true;

  questions: IQuestion[] = [];

  getQuestions() {
    this.questionService.getQuestions(this.sessionId)
      .subscribe(
        (res: IQuestion[]) => {
          this.questions = res;

          this.voteUser();
          this.setAverage();
        },
        err => console.log(err)
      );
  }

  voteUser() {
    for (let index = 0; index < this.questions.length; index++) {

      this.questions[index].vote = false;

      for (let index2 = 0; index2 < this.questions[index].votes.length; index2++) {

        if (this.questions[index].votes[index2][0] === this.userName) {
          this.questions[index].vote = true;
        }

      }
    }
  }

  session: ISession = { name: '', typeId: '' };

  getSession() {
    this.sessionService.getSession(this.sessionId)
      .subscribe(
        (res: ISession) => {
          this.session = res;

          this.getType()
        },
        err => console.log(err)
      );
  }

  type: IType = { numbers: [1] };

  getType() {
    this.typeService.getType(this.session.typeId)
      .subscribe(
        (res: IType) => {
          this.type.numbers = res.numbers;
        },
        err => console.log(err)
      );
  }

  selectCard(question: IQuestion, card: number) {
    this.questionService.updateQuestion(question._id, this.userName, card)
      .subscribe(
        res => {
          this.getQuestions();
        },
        err => console.log(err)
      );
  }

  setAverage() {
    for (let index = 0; index < this.questions.length; index++) {
      let average = 0;
      for (let index2 = 0; index2 < this.questions[index].votes.length; index2++) {
        average += this.questions[index].votes[index2][1] / this.questions[index].votes.length;
      }
      this.questions[index].average = average;
    }
  }
}
