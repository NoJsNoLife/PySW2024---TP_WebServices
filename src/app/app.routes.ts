import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageCComponent } from './components/page-c/page-c.component';
import { PageDComponent } from './components/page-d/page-d.component';

export const routes: Routes = [
    {path: 'index', component: IndexComponent},
    {path: 'pagea', component: PageAComponent},
    {path: 'pageb', component: PageBComponent},
    {path: 'pagec', component: PageCComponent},
    {path: 'paged', component: PageDComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'index'}
];
