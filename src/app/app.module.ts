import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FooComponent} from './foo.component';
import {AResolver, BResolver} from './resolvers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'a'
  },
  {
    path: 'a',
    component: FooComponent,
    resolve: {result: AResolver}
  },
  {
    path: 'b',
    component: FooComponent,
    resolve: {result: BResolver}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [AResolver, BResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
