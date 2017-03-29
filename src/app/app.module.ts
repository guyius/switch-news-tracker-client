import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HashtagsService } from './hashtags.service';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HashtagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HashtagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
