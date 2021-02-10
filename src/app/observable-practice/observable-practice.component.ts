import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-observable-practice",
  templateUrl: "./observable-practice.component.html",
  styleUrls: ["./observable-practice.component.css"]
})
export class ObservablePracticeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const sequence = new Observable(this.seqSubscriber);

    sequence.subscribe({
      next(num) {
        console.log("sub1: " + num);
      },
      complete() {
        console.log("COMPLETE");
      },
      error() {
        console.log("ERROR");
      }
    });
    sequence.subscribe({
      next(num) {
        console.log("sub2: " + num);
      },
      complete() {
        console.log("COMPLETE2");
      },
      error() {
        console.log("ERROR");
      }
    });
  }
  seqSubscriber(observer) {
    const seq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let timeoutId;
    function doInSeq(array, index) {
      timeoutId = setTimeout(() => {
        observer.next(array[index]);
        if (index === array.length - 1) {
          observer.complete();
        } else {
          doInSeq(array, ++index);
        }
      }, 1000);
    }
    doInSeq(seq, 0);

    return {
      unsubscribe() {
        clearTimeout(timeoutId);
      }
    };
  }
}
