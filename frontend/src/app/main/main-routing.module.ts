import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ManagementComponent } from './pages/management/management.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { ScientificComponent } from './pages/activity/scientific/scientific.component';
import { InternationalComponent } from './pages/activity/international/international.component';
import { SocialComponent } from './pages/activity/social/social.component';
import { StudyComponent } from './pages/activity/study/study.component';
import { MeyorComponent } from './pages/docs/meyor/meyor.component';
import { GrantlarComponent } from './pages/docs/grantlar/grantlar.component';
import { NizomComponent } from './pages/docs/nizom/nizom.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'management', component: ManagementComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsDetailsComponent },
      { path: 'scientific', component: ScientificComponent },
      { path: 'international', component: InternationalComponent },
      { path: 'social', component: SocialComponent },
      { path: 'study', component: StudyComponent },
      { path: 'nizom', component: NizomComponent },
      { path: 'grant', component: GrantlarComponent },
      { path: 'meyor', component: MeyorComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
