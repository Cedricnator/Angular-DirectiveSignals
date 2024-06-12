import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout';
import { 
  CounterPageComponent, 
  UserInfoPageComponent, 
  PropertiesPageComponent 
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { 
        path: 'counter',
        component: CounterPageComponent
      },
      {
        path: 'user',
        component: UserInfoPageComponent
      },
      {
        path: 'properties',
        component: PropertiesPageComponent
      },
      {
        path: '**',
        redirectTo: 'counter'
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
