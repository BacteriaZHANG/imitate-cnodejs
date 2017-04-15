import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserLoginService } from '../user/user-login.service';
import { Observable } from 'rxjs/Observable';

import { User } from '../user/user-model';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit {
    public user: User = new User();
    private hid: boolean = true;
    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public userLoginService: UserLoginService
    ) { }

    ngOnInit() {
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.route.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
    }

    public doLogin(): void {
        this.userLoginService.login(this.user);
        if(!this.user.username || !this.user.password){
            this.router.navigateByUrl('signin');
            this.showAlert();
        }
        this.router.navigateByUrl('articles');
    }

    showAlert() {
        this.hid = false;
    }
    hideAlert() {
        this.hid = true;
    }
}