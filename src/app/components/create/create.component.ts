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
    this.typeService.getTypes()
      .subscribe(
        (res: IType[]) => {
          this.originalTypes = res;
      
          for (let index = 0; index < this.originalTypes.length; index++) {
            this.types.push([this.originalTypes[index]._id + '', this.originalTypes[index].numbers.join(", ")]);
          }
        },
        err => console.log(err)
      );

  }

  originalTypes: IType[] = [];

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
