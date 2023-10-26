import { Component, DoCheck, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit, DoCheck {
  public Customerdata: any;

  constructor(private service: CustomerService) {}
  ngDoCheck(): void {
    console.log('Inside ng Do check');
  }

  ngOnInit(): void {
    console.log('Inside Ng Onit');
    this.LoadCustomerData();

  }

  private LoadCustomerData() {
    this.service.LoadCustomer().subscribe((data) => {
      this.Customerdata = data.users;
    });
  }

  public delete(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.service.RemoveCustomer(id).subscribe((result) => {
        if (result != null) {
          this.LoadCustomerData();
        }
      });
    }
  }
}
