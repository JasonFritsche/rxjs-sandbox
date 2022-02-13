import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-sandbox';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getTodos().subscribe((todos) => console.log(todos));
  }
}
