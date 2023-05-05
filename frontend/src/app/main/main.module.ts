import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';
import { SmallAboutUsComponent } from './components/small-about-us/small-about-us.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { InformationComponent } from './components/information/information.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ManagementComponent } from './pages/management/management.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { StudyComponent } from './pages/activity/study/study.component';
import { InternationalComponent } from './pages/activity/international/international.component';
import { SocialComponent } from './pages/activity/social/social.component';
import { ScientificComponent } from './pages/activity/scientific/scientific.component';
import { NizomComponent } from './pages/docs/nizom/nizom.component';
import { GrantlarComponent } from './pages/docs/grantlar/grantlar.component';
import { MeyorComponent } from './pages/docs/meyor/meyor.component';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    MainBarComponent,
    SmallAboutUsComponent,
    TopNewsComponent,
    InformationComponent,
    GalleryComponent,
    ContactComponent,
    NewsComponent,
    NewsDetailsComponent,
    AboutUsComponent,
    ManagementComponent,
    BreadcrumbsComponent,
    StudyComponent,
    InternationalComponent,
    SocialComponent,
    ScientificComponent,
    NizomComponent,
    GrantlarComponent,
    MeyorComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
