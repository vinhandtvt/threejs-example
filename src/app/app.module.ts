import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { ModelComponent } from './model/model.component';
import { FlyingBirthsComponent } from './flying-births/flying-births.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    ModelComponent,
    FlyingBirthsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
