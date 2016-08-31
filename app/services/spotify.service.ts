import { Injectable } from '@angular/core'; // We will need dependancy injection, so we will import Injectable from angular core.
import { Http, Headers } from '@angular/http'; // Http Module as well... importing.
import 'rxjs/add/operator/map'; // Also require observable, so we will import these functions as well.

@Injectable()
export class SpotifyService{ // Inside here we will make our api request.
	private searchUrl: string; // This is where we collect our search string as the user is typing.
	private artistUrl: string;

	constructor(private _http:Http) {

	}

	searchMusic(str: string, type='artist') {// It will then get passed in here as an input to searchMusic() where it will be concatenated into our search Url.
		this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US'; //Following the url structure as listed in spotify's api docs.
		return this._http.get(this.searchUrl)//_http.get() will fetch our data with the searchUrl we've created.
			.map(res => res.json())// Then map our results into an array.
	}

	searchArtist(id: string, type='artist') {// The id from our artist object from searchArtist() where it will be concatenated into our artist Url.
		this.searchUrl = 'https://api.spotify.com/v1/artists/' + id;
		return this._http.get(this.artistUrl)//_http.get() will fetch our data with the artistUrl we've created.
			.map(res => res.json())// Again, maps results into an array.
	}
}