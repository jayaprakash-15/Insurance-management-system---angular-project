import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  errorMessage: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.findAll().subscribe(
      customers => {
        this.customers = customers;
        console.log('Retrieved customers:', customers); // Log retrieved customers to console
      },
      error => this.errorMessage = 'Error retrieving customers: ' + error // Handle error
    );
  }
}
