import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
        {
            path: 'feed',
            loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
        },
        {
            path: 'notifications',
            loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
        },
        {
            path: 'chat',
            loadChildren: () => import('../pages/chat/chat.module').then(m => m.ChatPageModule)
        }
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter {}
