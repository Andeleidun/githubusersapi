import { Component, OnInit, Input } from '@angular/core';
import { ApiService, Repos } from './api.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Git Hub API';
  public repos: Array<Repos> = null;
  public starred: Array<Repos> = null;
  public user: User = null;

  @Input() query;

  constructor(private  apiService:  ApiService) {

  }

  ngOnInit() {
  }

  fetchData() {
    console.log(this.query);
    this.apiService.fetchProfile(this.query).subscribe((data) => {
      this.user = data;
      console.log(this.user);
    }, (err) => {
      console.log(err);
    });
    this.apiService.fetchRepos(this.query).subscribe((data) => {
      this.repos = data;
      console.log(this.repos);
    }, (err) => {
      console.log(err);
    });
    this.apiService.fetchStarred(this.query).subscribe((data) => {
      this.starred = data;
      console.log(this.starred);
    }, (err) => {
      console.log(err);
    });
  }
}
