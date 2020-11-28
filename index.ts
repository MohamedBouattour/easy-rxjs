// RxJS v6+
import { fromEvent, interval, timer } from "rxjs";
import {
  audit,
  auditTime,
  debounce,
  first,
  take,
  takeUntil
} from "rxjs/operators";

const source = interval(1000);

const clicks = fromEvent(document, "click");

source.pipe(first()).subscribe(val => console.log("first", val));

source.pipe(take(1)).subscribe(val => console.log("take", val));

source
  .pipe(takeUntil(clicks))
  .subscribe(val => console.log("takeUntilClick", val));

/*clicks
  .pipe(audit(ev => interval(2000)))
  .subscribe(val => console.log("audit", val));*/

/*source
  .pipe(auditTime(3000))
  .subscribe(val => console.log("auditTime Clicked", val));*/

clicks
  .pipe(debounce(() => timer(700)))
  .subscribe(val => console.log("Clicked 1 sec ago", val));
