import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleComponent } from './shared/title/title.component';
import { LogosinstitucionesComponent } from './shared/logosinstituciones/logosinstituciones.component';
import { ImageteamPipe } from './pipes/imageteam.pipe';
import { TeamComponent } from './pages/team/team.component';

import { TeamcountryComponent } from './pages/teamcountry/teamcountry.component';
import { MissiontecComponent } from './pages/missiontec/missiontec.component';
import { MissionscComponent } from './pages/missionsc/missionsc.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImagelogoPipe } from './pipes/imagelogo.pipe';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ImagegeneralPipe } from './pipes/imagegeneral.pipe';
import { AboutComponent } from './pages/about/about.component';
import { PostComponent } from './shared/post/post.component';
import { PostContentComponent } from './shared/post/post-content/post-content.component';
import { PostSidebarComponent } from './shared/post/post-sidebar/post-sidebar.component';
import { PostCommentComponent } from './shared/post/post-comment/post-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    IndexComponent,
    TitleComponent,
    LogosinstitucionesComponent,
    ImageteamPipe,
    TeamComponent,
    TeamcountryComponent,
    MissiontecComponent,
    MissionscComponent,
    ContactComponent,
    ImagelogoPipe,
    SidebarComponent,
    ImagegeneralPipe,
    AboutComponent,
    PostComponent,
    PostContentComponent,
    PostSidebarComponent,
    PostCommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
