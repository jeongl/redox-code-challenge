/* eslint-disable */
import React from 'react';
import Rx from 'rxjs';
import { mapPropsStreamWithConfig } from 'recompose';
import rxjsConfig from 'recompose/rxjsObservableConfig'
const mapPropsStream = mapPropsStreamWithConfig(rxjsConfig)

const enhance = mapPropsStream(props$ => {
  const timeElapsed$ = Rx.Observable.from([1, 2, 3, 4]);
  const timeElapsedAnother$ = Rx.Observable.interval(500);

  return props$.combineLatest([
    timeElapsed$,
    timeElapsedAnother$
  ], (props, timeElapsed, timeElapsedAnother) => {
    // debugger;
    return {
      ...props,
      timeElapsed,
      timeElapsedAnother
    }
  })
});

const Timer = enhance(({ timeElapsed }) =>
  <div>Time elapsed: {timeElapsed}</div>
)

export default Timer;
