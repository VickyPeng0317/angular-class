import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AgePipe } from './age.pipe';
import { GenderPipe } from './gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AgePipe,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
