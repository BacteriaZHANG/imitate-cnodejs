import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserLoginService } from '../user/user-login.service';
import { User } from '../user/user-model';
import { LocalStorage } from '../core/common/local.storage';

@Component({
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit {
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
}