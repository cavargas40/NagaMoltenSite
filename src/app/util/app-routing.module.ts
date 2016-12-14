import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//paginas
import { IndexComponent } from '../components/pages/index/index.component';
import { MembersComponent } from '../components/pages/members/members.component';
import { ScheduleComponent } from '../components/pages/schedule/schedule.component';
import { RecruitmentComponent } from '../components/pages/recruitment/recruitment.component';
import { LoginComponent } from '../components/pages/login/login.component';
import { CreateaccountComponent } from '../components/pages/createaccount/createaccount.component';
import { ForgotpasswordComponent } from '../components/pages/forgotpassword/forgotpassword.component';

//tests
import { DummyTestsComponent } from '../components/dummy-tests/dummy-tests.component'

const routes: Routes = [
  //{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '',  component: IndexComponent  },  
  { path: 'members', component: MembersComponent},
  { path: 'calendar', component: ScheduleComponent},
  { path: 'recruitment', component: RecruitmentComponent},
  { path: 'dummy', component: DummyTestsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'createaccount',  component: CreateaccountComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent }

  //   { path: 'detail/:id', component: HeroDetailComponent },
  //   { path: 'heroes',     component: HeroesComponent }
  //{path: '/404', name: 'NotFound', component: NotFoundComponent},
  //{path: '/*path', redirectTo: ['NotFound']}
  //{path: '/**', redirectTo: ['NotFound']}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }