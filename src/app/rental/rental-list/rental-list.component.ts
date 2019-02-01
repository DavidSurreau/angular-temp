import { Component, OnInit } from '@angular/core';
import {RentalService} from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  // items: any[] = ['kkr', 'Second', 'Third'];
  rentals: Rental[] = [];
  // item: items[] = ['kkr', 'Second', 'Third'];

  constructor(private rentalService: RentalService) {

   }
  
  ngOnInit() {
    // debugger;
    const rentalObservable = this.rentalService.getRentals();
    
    // debugger;
    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        // debugger;
        this.rentals = rentals;
      },
      (err) => {
        // debugger;

      },
      () => {
        // debugger;
      },
          );
  }

}
