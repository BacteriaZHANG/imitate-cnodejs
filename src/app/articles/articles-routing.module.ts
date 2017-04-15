import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { SideBarComponent } from '../sidebar/sidebar.component';
import { SideBarSmallComponent } from '../sidebar/sidebar-small.component';

const articlesRoutes: Routes = [
    { 
        path: '',
        component: ArticlesComponent,
        children: [
            { 
                path: '',
                component: SideBarComponent,
                children: [
                    {
                        path: '',
                        component: SideBarSmallComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'articles',
        component: ArticlesComponent,
        children: [
            { 
                path: '',
                component: SideBarComponent,
                children: [
                    {
                        path: '',
                        component: SideBarSmallComponent
                    }
                ]
            }
        ]
    }
    //{ path: 'articles/:id', component: ArticleDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(articlesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ArticlesRoutingModule { }
