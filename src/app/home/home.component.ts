import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { QuoteService } from '../shared/services/quote/quote.service';
import { List } from 'lodash';
import { CustomerService, Customer } from '../shared/services/customer/customer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  users: object[];
  dataCollection: Customer[];

  constructor(private quoteService: QuoteService, private http: HttpClient, private customerservice: CustomerService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
    this.dataCollection =  this.customerservice.getCustomers();
  }

}
