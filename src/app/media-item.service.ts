import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService{
	constructor(private http: Http){};


	get(medium){
		let searchParams = new URLSearchParams();
		searchParams.append('medium', medium);
		return this.http.get('mediaitems', {search: searchParams})
			.map(response => {
				return response.json().mediaItems;
			});
	};
	
	add(mediaItem){
		return this.http.post('mediaitems', mediaItem)
			.map(response => {});
	};

	delete(mediaItem){
		return this.http.delete(`mediaitems/${mediaItem.id}`)
			.map(response => {});
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