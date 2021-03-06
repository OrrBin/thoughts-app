import { Component, OnInit } from '@angular/core';
import { ThoughtsService } from '@app/services/thoughts.service';
import { finalize } from 'rxjs/operators';
import { SnapshotIndex } from '@app/@core/objects/snapshot';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  userId: number;
  sub: any;

  snapshots: SnapshotIndex[] = [];

  isLoading = false;

  constructor(private thoughtsSerivce: ThoughtsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;

    this.sub = this.route.params.subscribe((params) => {
      this.userId = +params['id'];

      this.thoughtsSerivce
        .getSnapshots(this.userId)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe((snapshots: SnapshotIndex[]) => {
          this.snapshots = snapshots;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  timeString(milliseconds: number): string {
    let date = new Date();
    date.setTime(milliseconds);

    return date.toLocaleDateString() + ', ' + date.toLocaleTimeString();
  }
}
