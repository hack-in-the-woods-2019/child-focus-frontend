import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../map/map.module').then(m => m.MapPageModule)
                    }
                ]
            },
            {
                path: 'notification',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../notification/notification.module').then(m => m.NotificationPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/map/map',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/map/map',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
