import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Article, ArticlesService } from './article.service';

@Component({
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    articles: Observable<Article[]>;

    private selectedID: number;

    constructor(
        private service: ArticlesService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.articles = this.route.params
            .switchMap((params: Params) => {
                this.selectedID = +params['id'];
                return this.service.getArticles();
            });
    }
}