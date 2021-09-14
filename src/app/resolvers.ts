import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Injectable} from '@angular/core';


@Injectable()
export class AResolver implements Resolve<string> {
  public resolve(): Observable<string> {
    console.log('AResolver: resolve called');
    return of('a').pipe(
      delay(500)
    );
  }
}

@Injectable()
export class BResolver implements Resolve<string> {
  public resolve(): Observable<string> {
    console.log('BResolver: resolve called');
    return of('b').pipe(
      delay(500)
    );
  }
}
