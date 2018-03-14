import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
