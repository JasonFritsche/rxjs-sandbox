import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  getTodos() {
    return this.httpClient.get(`${this.todosUrl}`);
  }
}
