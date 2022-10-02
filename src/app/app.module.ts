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
import { HttpClientModule } from '@angular/common/http';
import { ImageDetailsModalComponent } from './modals/image-details-modal/image-details-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

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
    ImageDetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
