import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserIndex } from '@app/@core/objects/user';
import { SnapshotIndex } from '@app/@core/objects/snapshot';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
};

const baseUrl = 'http://127.0.0.1:5000';

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThoughtsService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserIndex[]> {
    return this.httpClient.get<UserIndex[]>(`${baseUrl}/users`);
    // .pipe(
    // map((body: any) => body.value),
    // catchError(() => of('Error, could not load joke :-('))
    // );
  }

  getSnapshots(userId: number): Observable<SnapshotIndex[]> {
    return this.httpClient.get<SnapshotIndex[]>(`${baseUrl}/users/${userId}/snapshots`);
    // .pipe(
    // map((body: any) => body.value),
    // catchError(() => of('Error, could not load joke :-('))
    // );
  }

  getSnapshot(userId: number, snapshotId: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${baseUrl}/users/${userId}/snapshots/${snapshotId}`);
    // .pipe(
    // map((body: any) => body.value),
    // catchError(() => of('Error, could not load joke :-('))
    // );
  }
}
