import { BrowserModule } 	              from '@angular/platform-browser';
import { NgModule } 		                from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { HttpModule, XHRBackend }       from '@angular/http';

import { AppComponent } 	              from './app.component';
import { FavoriteDirective }            from './favorite.directive';
import { CategoryListPipe }             from './category-list.pipe';
import { MediaItemListComponent }       from './media-item-list.component';
import { MediaItemComponent }           from './media-item.component';
import { MediaItemFormComponent }       from './media-item-form.component';
import { MediaItemService }             from './media-item.service';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend }               from './mock-xhr-backend';
import { routing }                      from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListPipe,
    FavoriteDirective,
    MediaItemListComponent,
    MediaItemFormComponent,
    MediaItemComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists},
    { provide: XHRBackend, useClass: MockXHRBackend},
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
