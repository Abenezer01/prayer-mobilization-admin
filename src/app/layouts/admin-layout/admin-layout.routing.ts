import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { Component } from '@angular/core';
import { UsersComponent } from './../../pages/users/users.component';
import { MessageComponent } from '../../pages/message/message.component';
import { ComposeMessageComponent } from './../../message/compose-message/compose-message.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'prayers',          component: UsersComponent},
    { path: 'messages',       component: MessageComponent         },
    { path: 'message/compose', component: ComposeMessageComponent  }

];
