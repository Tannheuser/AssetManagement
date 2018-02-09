import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RoutingModule } from './modules/routing.module';
import { SharedModule } from './modules/shared.module';

import { environment } from '../environments/environment';
import { reducers } from './reducers/app.reducer';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    RoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AssetManagementModule { }
