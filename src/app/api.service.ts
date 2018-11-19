import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

  export interface Repos {
    html_url: string;
    description: string;
    name: string;
    stars: number;
  }

  @Injectable({
    providedIn:  'root'
  })

  export class ApiService {
    private dataURLBase = 'https://api.github.com/';
    private dataURLUsers = 'users/';
    private dataURLRepos = '/repos';
    private dataURLStarred = '/starred';

    constructor ( private  httpClient:  HttpClient ) {

    }

    fetchRepos(dataURLQuery):  Observable<Repos[] > {
      const urlRepos = this.dataURLBase + this.dataURLUsers + dataURLQuery + this.dataURLRepos;
      console.log(urlRepos);
      return <Observable<Repos[] > > this.httpClient.get(urlRepos);
    }

    fetchStarred(dataURLQuery):  Observable<Repos[] > {
      const urlStarred = this.dataURLBase + this.dataURLUsers + dataURLQuery + this.dataURLStarred;
      console.log(urlStarred);
      return <Observable<Repos[] > > this.httpClient.get(urlStarred);
    }

    fetchProfile(dataURLQuery):  Observable<User> {
      const urlProfile = this.dataURLBase + this.dataURLUsers + dataURLQuery;
      console.log(urlProfile);
      return this.httpClient.get <User> (urlProfile);
    }
  }
