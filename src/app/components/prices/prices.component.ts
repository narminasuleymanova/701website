import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {

illik:boolean = true;
ayliq:boolean = false;

onClick() {
  if(!this.illik){
    this.illik = true;
    this.ayliq =false;
  }

  // this.illik = !this.illik
  // this.ayliq = !this.ayliq
}

onClick2() {
  if(!this.ayliq){
    this.ayliq = true;
    this.illik =false;
  }
}

}
