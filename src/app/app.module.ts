import { ImagePageComponent } from './pages/image-page/image-page.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { ImageListComponent } from './components/image-list/image-list.component';

const appRoute: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'search/:image-search',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ImageDetailsComponent,
    ImagePageComponent,

    ImageItemComponent,
     ImageListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
