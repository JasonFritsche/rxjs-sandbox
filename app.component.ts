import { Component } from "@angular/core";
import { concat, concatMap, map, Observable, of, takeLast } from "rxjs";
import { ITodo } from "./interfaces/Todo";
import { AppService } from "./services/app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "rxjs-sandbox";

  todos$!: Observable<ITodo[]>;

  todos: ITodo[] = [];

  todoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  todoIdsTwo = [21, 22, 23, 24, 25];

  ofTodoIds = of(...this.todoIds);
  ofTodoIdsTwo = of(...this.todoIdsTwo);

  constructor(private appService: AppService) {}

  ngOnInit() {
    // this.todos$ = this.appService.getTodos();
    this.getTodos();
  }

  // private getTodos() {
  //   this.ofTodoIds.pipe(concatMap((todoItem) => this.appService.getTodo(todoItem))).subscribe((result: ITodo) => this.todos.push(result));
  // }

  private getTodos() {
    const allTodoItems = concat(this.ofTodoIds, this.ofTodoIdsTwo);

    allTodoItems.subscribe((todoId) =>
      this.appService
        .getTodo(todoId)
        .pipe(map((todo) => this.capitalizeTodoTitle(todo)))
        .subscribe((todo) => this.todos.push(todo))
    );
  }

  private capitalizeTodoTitle(todoToChange: ITodo): ITodo {
    return {
      ...todoToChange,
      title: todoToChange.title
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" "),
    };
  }

  // private getTodos() {
  //   const allTodoItems = concat(this.ofTodoItemsOne, this.ofTodoItemsTwo);

  //   allTodoItems
  //     .pipe(concatMap((todoItem) => this.appService.getTodo(todoItem)))
  //     .pipe(takeLast(7))
  //     .subscribe((result: ITodo) => this.todos.push(result));
  // }
}
