export class MediaItemService{
	get(){
		return this.mediaItems;
	};
	
	add(mediaItem){
		this.mediaItems.push(mediaItem);
	};

	delete(mediaItem){
		let index = this.mediaItems.indexOf(mediaItem);
		if (index > 0){
			this.mediaItems.splice(index, 1);
		}
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