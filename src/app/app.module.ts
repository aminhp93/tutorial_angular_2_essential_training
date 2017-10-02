import { BrowserModule } 	       from '@angular/platform-browser';
import { NgModule } 		         from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } 	       from './app.component';
import { FavoriteDirective }     from './favorite.directive';
import { CategoryListPipe }             from './category-list.pipe';
import { MediaItemListComponent }       from './media-item-list.component';
import { MediaItemComponent }           from './media-item.component';
import { MediaItemFormComponent }       from './media-item-form.component';
import { MediaItemService }             from './media-item.service';
import { lookupListToken, lookupLists } from './providers';

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
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
