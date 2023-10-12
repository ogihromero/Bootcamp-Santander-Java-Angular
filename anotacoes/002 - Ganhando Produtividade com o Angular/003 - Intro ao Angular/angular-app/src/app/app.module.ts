import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { SizerComponent } from './sizer/sizer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MyButtonComponent, SizerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
