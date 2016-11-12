import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { HttpModule }      from '@angular/http';

import { AppComponent }    from './app.component';
import { HeaderComponent } from './header.component';
import { ListComponent }   from './list.component';
import { RequestService }   from './request.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, ListComponent ],
  providers: [ RequestService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
