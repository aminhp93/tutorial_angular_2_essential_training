import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		from '@angular/core';

import { AppComponent } 	from './app.component';
import { MediaItemComponent } from './media-item.component';
import { FavoriteDirective } from  './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    FavoriteDirective,
    CategoryListPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
