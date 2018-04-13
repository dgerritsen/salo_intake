// import { NgModule } from '@angular/core';
// import { LoginComponent } from '../login/login.component';
// import { HomeComponent } from '../home/home.component';
// import {ArrivingComponent} from '../arriving/arriving.component';
// import {ArrivingScanComponent} from '../arriving/arriving-scan/arriving-scan.component';
// import {ArrivingSavedComponent} from '../arriving/arriving-saved/arriving-saved.component';
// import {ArrivingHistoryComponent} from '../arriving/arriving-history/arriving-history.component';
// import {ArrivingHomeComponent} from '../arriving/arriving-home/arriving-home.component';
//
// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   {
//     path: 'arriving',
//     component: ArrivingComponent,
//     children: [
//       {
//         path: '',
//         component: ArrivingHomeComponent
//       },
//       {
//         path: 'scan',
//         component: ArrivingScanComponent
//       },
//       {
//         path: 'saved',
//         component: ArrivingSavedComponent
//       },
//       {
//         path: 'history',
//         component: ArrivingHistoryComponent
//       },
//     ],
//   },
//   { path: 'login', component: LoginComponent },
// ];
//
// @NgModule({
//   exports: [ RouterModule ],
//   imports: [ RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload' }) ]
// })
// export class RoutingModule { }
//
//
