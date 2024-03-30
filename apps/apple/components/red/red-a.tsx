import React from 'react'
import { get } from 'lodash-es'
import { Observable } from 'rxjs';


const OBJ = {'a':1,'b':2}

export const RedA = ()=>{
    const observable = new Observable((subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
          subscriber.next(4);
          subscriber.complete();
        }, 1000);
      });
    console.log('OBJ-a',get(OBJ,'a'))
    return <div>RedA</div>
}