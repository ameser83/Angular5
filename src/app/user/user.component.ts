import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService, User } from '../shared/services/user/user.service';
import { List } from 'lodash';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  dataCollection: User[];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataCollection = this.userservice.getUsers();
    //this.userservice.getUsers().subscribe(data => this.dataCollection = data);

  }
}
