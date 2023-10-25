import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
})
export class AddNewComponent {
  messageclass: string = '';
  message: string = '';
  customerid: number = 0;
  editdata: any;
  responsedata: any;

  constructor(private service: CustomerService, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.customerid = parseInt(id);
    }
  }

  register = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: new FormControl('', Validators.required),
  });

  SaveCustomer() {
    if (this.register.valid) {
      console.log(this.register.value);
      this.service.SaveCustomer(this.register.value).subscribe((result) => {
        if (result != null) {
          this.responsedata = result;
          if (this.responsedata.id > 1) {
            this.message = 'Customer Saved Successfully';
            this.messageclass = 'sucess';
            this.clearcustomer();
          } else {
            this.message = 'Failed to Save';
            this.messageclass = 'error';
          }
        }
      });
    } else {
      this.message = 'Please enter Valid Data';
      this.messageclass = 'error';
    }
  }
  clearcustomer() {
    this.register = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    });
  }
  get name(){
    return this.register.get("name");
  }
  get email(){
    return this.register.get("email");
  }
}
