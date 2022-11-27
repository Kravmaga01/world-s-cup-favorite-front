import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  title = 'words-cup';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}
  goToCreateAccount() {
    this.router.navigate(['create']);
  }
}
