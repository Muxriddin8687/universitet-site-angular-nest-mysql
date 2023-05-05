import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ManagementComponent } from './pages/management/management.component';
import { NewsComponent } from './pages/news/news.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsEditComponent } from './pages/news/news-edit/news-edit.component';
import { ManagementEditComponent } from './pages/management/management-edit/management-edit.component';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { ScientificComponent } from './pages/activity/scientific/scientific.component';
import { SocialComponent } from './pages/activity/social/social.component';
import { InternationalComponent } from './pages/activity/international/international.component';
import { StudyComponent } from './pages/activity/study/study.component';
import { NizomComponent } from './pages/doc/nizom/nizom.component';
import { MeyorComponent } from './pages/doc/meyor/meyor.component';
import { GrantComponent } from './pages/doc/grant/grant.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    ManagementComponent,
    NewsComponent,
    DashboardComponent,
    AboutUsComponent,
    NewsEditComponent,
    ManagementEditComponent,
    ScientificComponent,
    SocialComponent,
    InternationalComponent,
    StudyComponent,
    NizomComponent,
    MeyorComponent,
    GrantComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
  ]
})
export class AdminModule { }
