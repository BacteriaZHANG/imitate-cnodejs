import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { User } from './user-model';
import { LocalStorage } from '../core/common/local.storage'

@Injectable()
export class UserLoginService {
    public userLoginURL = 'src/mock-data/user-login-mock.json';
    public subject: Subject<User> = new Subject<User>();

    constructor(public http: Http, public localStorage: LocalStorage) {}

    public get currentUser(): Observable<User> {
        return this.subject.asObservable();
    }

    public login(user: User) {
        return this.http
            .get(this.userLoginURL)
            .map((res: Response) => {
                let user = res.json();
                if (user && user.token) {
                    this.localStorage.setItem("currentUser", JSON.stringify(user));
                    this.subject.next(Object.assign({}, user));
                }
                return res;
            })
            .subscribe(
            data => {
                console.log("login success>" + data);
            },
            error => {
                console.log(error);
            }
            );
    }
    public logout(): void {
        this.localStorage.removeItem("currentUser");
        this.subject.next(Object.assign({}));
    }
}