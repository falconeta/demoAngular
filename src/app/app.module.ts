import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdsComponent } from './ads/ads.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { ContextService } from './services/context.service';
import { VideoComponent } from './video/video.component';
import { SocialService } from './services/social.service';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AdsComponent,
    NavComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ErrorComponent,
    VideoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContextService, SocialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
