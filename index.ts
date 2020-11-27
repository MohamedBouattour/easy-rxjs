// RxJS v6+
import { fromEvent, interval } from "rxjs";
import { first, take, takeUntil } from "rxjs/operators";

const source = interval(1000);
//no value will pass, emit default
const clicks = fromEvent(document, "click");

const example1 = source.pipe(first());
const example2 = source.pipe(take(1));
const example3 = source.pipe(takeUntil(clicks));

example1.subscribe(val => console.log("first", val));
example2.subscribe(val => console.log("take", val));
example3.subscribe(val => console.log("takeUntilClick", val));
