import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoggingService ]
})

export class AppComponent implements OnInit {

  accounts: {name: string, status: string} [] = [];

  constructor (private accountService: AccountsService, private loggingService: LoggingService)  {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

}
