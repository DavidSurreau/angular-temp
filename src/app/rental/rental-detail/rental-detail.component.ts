import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  public print: any;
  rental: Rental;

  constructor(private route: ActivatedRoute,
    private rentalService: RentalService
    ) {
    // this.route.params.subscribe( params => {this.print = params.rentalId}, 
    // );
    // console.log(this.print)
   }

  ngOnInit() {
        this.route.params.subscribe( params => {this.getRental(params.rentalId)}
        );
           
  };
  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) =>
    {
      this.rental = rental;
    });
  }
}
