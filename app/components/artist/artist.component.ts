//artist component
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../Artist';
import {Album} from '../../../Album';
import {ActivatedRoute} from '@angular/router'

@Component({
	moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ArtistComponent implements OnInit{ 
	id: string;
	artist: Artist[];
	albums: Album[];

	constructor(
		private _spotifyService:SpotifyService,
		private _route:ActivatedRoute){

	}

	ngOnInit(){
		this._route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotifyService.getArtist(id) // This will make the call for our Artist by id , again after the string has been built .
					.subscribe(artist => {
						this.artist = artist;
					})
			})
	}
}
