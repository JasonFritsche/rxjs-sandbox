import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITodo } from "../interfaces/Todo";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  private todosUrl = "https://jsonplaceholder.typicode.com/todos";

  getTodos() {
    return this.httpClient.get<ITodo[]>(`${this.todosUrl}`);
  }

  getTodo(todoItem: number) {
    return this.httpClient.get<ITodo>(`${this.todosUrl}/${todoItem}`);
  }
}
