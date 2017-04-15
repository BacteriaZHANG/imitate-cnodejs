import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserLoginService } from '../user/user-login.service';
import { User } from '../user/user-model';
import { LocalStorage } from '../core/common/local.storage';

@Component({
    selector: 'top-bar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.css']
})
export class TopBarComponent implements OnInit {
    public currentUser: User;

    constructor(
        public localStorage: LocalStorage,
        public router: Router,
        public route: ActivatedRoute,
        public userLoginSerivce: UserLoginService
    ) { }

    ngOnInit() {
        this.currentUser = JSON.parse(this.localStorage.getItem("currentUser"));
    }
}