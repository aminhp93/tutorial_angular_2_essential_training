import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onMediaItemDelete(mediaItem){
  	
  };

  firstMediaItem = {
  	id: 1,
  	name: "firebug",
  	medium: "series",
  	category: "category",
  	year: 2010,
  	watchedOn: 124555,
  	isFavorite: false
  }
}
