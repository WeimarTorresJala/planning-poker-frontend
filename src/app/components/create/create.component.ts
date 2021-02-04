import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { TypeService } from '../../services/type.service';
import { IType } from '../../interfaces/type';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private sessionService: SessionService, private typeService: TypeService, private router: Router) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.typeService.getTypes()
      .subscribe(
        (res: IType[]) => {
          for (let index = 0; index < res.length; index++) {
            this.types.push([res[index]._id + '', res[index].numbers.join(", ")]);
          }
        },
        err => console.log(err)
      );
  }

  types: [string, string][] = [];

  type: [string, string] = this.types[0];

  createSession(name: HTMLInputElement): boolean {
    this.sessionService.createSession(name.value, this.type[0])
      .subscribe(
        (res: {
          sessionResp?: {
            _id: string
          }
        }) => {
          this.router.navigate([`/create/${res.sessionResp?._id}/questions`]);
        },
        err => console.log(err)
      );

    return false;
  }
}
