import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

import { UserLoginService } from './user/user-login.service';
import { User } from './user/user-model';
import { LocalStorage } from './core/common/local.storage';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public currentUser: User;

    constructor(
        public localStorage: LocalStorage,
        public router: Router,
        public route: ActivatedRoute,
        public userLoginSerivce: UserLoginService
    ) { }

    ngOnInit() {
        this.currentUser = JSON.parse(this.localStorage.getItem("currentUser"));

        this.userLoginSerivce.currentUser
        .merge(this.userLoginSerivce.currentUser)
        .subscribe(
            data => {
                this.currentUser = data;
            }
        )
    }

    logout() {
        this.userLoginSerivce.logout();
        this.router.navigate(["articles"]);
    }
}
