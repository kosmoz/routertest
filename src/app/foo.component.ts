import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({template: '<p>Result is: {{result}}</p>'})
export class FooComponent {
  public readonly result: string = this.route.snapshot.data.result;

  constructor(private readonly route: ActivatedRoute) {
  }
}
