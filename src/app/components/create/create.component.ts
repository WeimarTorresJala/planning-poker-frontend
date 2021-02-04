import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private sessionService: SessionService, private router:Router) { }

  ngOnInit(): void {
  }

  types: [ number, string[] ][] = [
    [0, ["1","1","1","1","1"]],
    [1, ["2","2","2","2","2"]]
  ];

  type: [ number, string[] ] = this.types[0];

  setNewType(type: [ number, string[] ]): void {
    console.log(type);
    this.type = type;
  }

  createSession(name: HTMLInputElement): boolean {
    this.sessionService.createSession(name.value, this.type[0])
    .subscribe((res: {
      sessionResp?: {
        _id: string
      }
    }) => {
      this.router.navigate([`/create/${res.sessionResp?._id}/user`]);
    }, err => console.log(err));
    
    return false;
  }

}
