import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagementComponent } from './pages/management/management.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsEditComponent } from './pages/news/news-edit/news-edit.component';
import { ManagementEditComponent } from './pages/management/management-edit/management-edit.component';
import { ScientificComponent } from './pages/activity/scientific/scientific.component';
import { InternationalComponent } from './pages/activity/international/international.component';
import { SocialComponent } from './pages/activity/social/social.component';
import { StudyComponent } from './pages/activity/study/study.component';
import { NizomComponent } from './pages/doc/nizom/nizom.component';
import { MeyorComponent } from './pages/doc/meyor/meyor.component';
import { GrantComponent } from './pages/doc/grant/grant.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'management', component: ManagementComponent },
      { path: 'management/:id', component: ManagementEditComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsEditComponent },
      { path: 'scientific', component: ScientificComponent },
      { path: 'international', component: InternationalComponent },
      { path: 'social', component: SocialComponent },
      { path: 'study', component: StudyComponent },
      { path: 'nizom', component: NizomComponent },
      { path: 'meyor', component: MeyorComponent },
      { path: 'grant', component: GrantComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
