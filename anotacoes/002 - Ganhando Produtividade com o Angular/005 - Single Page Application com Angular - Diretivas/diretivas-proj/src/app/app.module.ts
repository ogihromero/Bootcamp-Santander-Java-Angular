import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomListModule } from './custom-list/custom-list.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompAttributesComponent } from './comp-attributes/comp-attributes.component';

@NgModule({
  declarations: [AppComponent, CardComponent, CompAttributesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CustomListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
