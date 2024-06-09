// sign-up.component.ts
import { Component } from '@angular/core';
import { Customer, CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  customer: Customer = {
    id: 0, 
    name: '',
    lastName: '', 
    email: '',
    dob: '',
    address: '',
    contactNumber: '',
    gender: '',
    occupation: '',
    education: '',
    income: 0,
    insuranceType: ''
  };
  agree: boolean = false;
  submitted: boolean = false;
  constructor(private customerService: CustomerService) {} 
  signup() {
    this.customerService.save(this.customer).subscribe(savedCustomer => {
      console.log('Saved customer:', savedCustomer);
      this.submitted = true;
    });
  }
}
