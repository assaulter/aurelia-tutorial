import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users{
  heading = 'Github Users';
  users = [];

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  /* canActivate, activate, canDeactivate, deactivateのライフサイクルメソッドがあるので、それにフックする
   * ちなpromiseを投げれば完了まで待つっぽい。
   */
  activate(){
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }

  canDeactivate() {
    return confirm('Are you sure you want to leave?');
  }
}