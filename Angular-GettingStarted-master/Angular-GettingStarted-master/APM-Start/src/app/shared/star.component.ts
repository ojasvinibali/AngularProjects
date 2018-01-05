import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
 @Input() rating: number;
starWidth: number;
@Output() ratingClicked: EventEmitter<string>=
              new EventEmitter<string>();

ngOnChanges() {
this.starWidth = this.rating * 86 / 5;
}

onClick() {
  // console.log(`Rating ${this.rating}`);
  this.ratingClicked.emit(`Rating ${this.rating}`);

}
}