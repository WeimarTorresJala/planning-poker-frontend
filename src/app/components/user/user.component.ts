import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sessionId = params['sessionId'];
    }); 
  }

  sessionId: string = '';

  addUser(userName: HTMLInputElement): boolean {
    this.router.navigate([`/session/${this.sessionId}/user/${userName.value}`]);

    return true;
  }
}
