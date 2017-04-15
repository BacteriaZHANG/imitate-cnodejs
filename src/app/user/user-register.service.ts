import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from './user-model';
import { LocalStorage } from '../core/common/local.storage'

@Injectable()
export class UserRegisterService {
    public userRegisterURL = "src/mock-data/user-register-mock.json";
    public subject: Subject<User> = new Subject<User>();

    constructor(public http: Http, public localStorage: LocalStorage) {
    }

    public get currentUser(): Observable<User> {
        return this.subject.asObservable();
    }

    public register(user: User) {
        return this.http
            .get(this.userRegisterURL)
            .map((response: Response) => {
                let user = response.json();
                this.localStorage.setItem("currentUser", JSON.stringify(user));
                this.subject.next(user);
            });
    }
}