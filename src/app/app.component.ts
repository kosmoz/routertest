import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  ActivationEnd,
  ActivationStart,
  ChildActivationEnd,
  ChildActivationStart,
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  ResolveEnd,
  ResolveStart,
  Router,
  RoutesRecognized
} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div style="color: red" *ngIf="error">{{error}}</div>
    <div *ngIf="!error">Please press the following link and then use your browser's back button!</div>
    <a routerLink="/a" routerLinkActive="hidden">Go to A</a>
    <a routerLink="/b" routerLinkActive="hidden">Go to B</a>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .hidden {
      display: none;
    }`]
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  public error?: string;

  constructor(private readonly router: Router) {
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.router.events.pipe(
      ).subscribe(event => {
        if (event instanceof NavigationStart) {
          console.log('Routing: NavigationStart');
        } else if (event instanceof RoutesRecognized) {
          console.log('Routing: RoutesRecognized');
        } else if (event instanceof NavigationEnd) {
          console.log('Routing: NavigationEnd');
        } else if (event instanceof ResolveStart) {
          console.log('Routing: ResolveStart');
        } else if (event instanceof ResolveEnd) {
          console.log('Routing: ResolveEnd');
        } else if (event instanceof GuardsCheckStart) {
          console.log('Routing: GuardsCheckStart');
        } else if (event instanceof GuardsCheckEnd) {
          console.log('Routing: GuardsCheckEnd');
        } else if (event instanceof ChildActivationStart) {
          console.log('Routing: ChildActivationStart');
        } else if (event instanceof ChildActivationEnd) {
          console.log('Routing: ChildActivationEnd');
        } else if (event instanceof ActivationStart) {
          console.log('Routing: ActivationStart');
        } else if (event instanceof ActivationEnd) {
          console.log('Routing: ActivationEnd');
        } else if (event instanceof NavigationCancel) {
          this.error = 'Routing: NavigationCancel: ' + event.reason;
          console.warn(this.error);
        } else if (event instanceof NavigationError) {
          console.error('Routing: NavigationError: ', event.error);
        }
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
