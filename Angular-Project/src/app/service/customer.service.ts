// customer-details.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  lastName: string; // Add lastName property
  email: string;
  dob: string;
  address: string;
  contactNumber: string;
  gender: string;
  occupation: string;
  education: string;
  income: number;
  insuranceType: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [];
  private lastId: number = 0;

  constructor() { }

  // Get all customers
  public findAll(): Observable<Customer[]> {
    return of(this.customers);
  }

  // Save a customer
  public save(customer: Customer): Observable<Customer> {
    customer.id = ++this.lastId; // Assign a unique ID to the customer
    this.customers.push(customer);
    return of(customer);
  }
}
