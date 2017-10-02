import { Pipe } from '@angular/core';

@Pipe({
	name: 'categoryList'
})

export class CategoryListPipe{
	transform(mediaItems){
		var categories = [];
		for(var i=0;i++; i< mediaItems.length){
			var mediaItem = mediaItems[i];
			if (categories.indexOf(mediaItem.category) <= -1){
				categories.push(mediaItem.category);
			}
		}
		return categories.join(', ');
	}
}