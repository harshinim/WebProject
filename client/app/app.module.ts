
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { ImageService } from './services/image.service';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {NgModule} from "@angular/core";

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
