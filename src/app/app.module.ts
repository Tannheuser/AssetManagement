import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MaterialModule} from './modules/material.module';

import { environment } from '../environments/environment';
import { reducers } from './reducers/app.reducer';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './root.component';
import { RoutingModule } from './modules/routing.module';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';


@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AssetManagementModule { }
