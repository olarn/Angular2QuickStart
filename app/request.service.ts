import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

@Injectable()
export class RequestService {
    constructor(private http: Http) {}
    listUser() {
        return this.http.get("http://reqres.in/api/users?page=2")
            .map(res => res.json())
            .catch(err => {
                console.log(err);
                return Observable.throw(err.message);
            });
    }
}