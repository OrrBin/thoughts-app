import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { ThoughtsService } from '@app/services/thoughts.service';
import { UserIndex } from '@app/@core/objects/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: UserIndex[] = [];

  isLoading = false;

  constructor(private thoughtsSerivce: ThoughtsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.thoughtsSerivce
      .getUsers()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((users: UserIndex[]) => {
        this.users = users;
      });
  }
}
