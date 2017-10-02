import { Component } from '@angular/core';

@Component({
	selector: 'mw-media-item-list',
	templateUrl: './media-item-list.component.html',
	styleUrls: ['./media-item-list.component.css']
})

export class MediaItemListComponent{
	onMediaItemDelete(mediaItem){
  	
	};

	mediaItems = [{
		id: 1,
		name: "firebug1",
		medium: "series1",
		category: "category1",
		year: 2011,
		watchedOn: 11111,
		isFavorite: false
	},
	{
		id: 2,
		name: "firebug2",
		medium: "series2",
		category: "category2",
		year: 2012,
		watchedOn: 22222,
		isFavorite: false
	}]
}

