import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HashtagsComponent } from './hashtags/hashtags.component';

export const routes: Routes = [
    { path: 'hashtags', component: HashtagsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);