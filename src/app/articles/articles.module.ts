import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticlesComponent } from './articles.component';
//import { ArticleDetailComponent } from './article-detail.component';

import { ArticlesService } from './article.service';

import { ArticlesRoutingModule } from './articles-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ArticlesRoutingModule
    ],
    declarations: [
        ArticlesComponent,
        //ArticleDetailComponent
    ],
    providers: [
        ArticlesService
    ]
})
export class ArticlesModule { }
