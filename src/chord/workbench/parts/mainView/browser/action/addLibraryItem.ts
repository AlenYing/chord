'use strict';

import { ISong } from 'chord/music/api/song';
import { IArtist } from 'chord/music/api/artist';
import { IAlbum } from 'chord/music/api/album';
import { ICollection } from 'chord/music/api/collection';
import { IUserProfile } from 'chord/music/api/user';

import {
    IAddLibrarySongAct,
    IAddLibraryArtistAct,
    IAddLibraryAlbumAct,
    IAddLibraryCollectionAct,
    IAddLibraryUserProfileAct,
} from 'chord/workbench/api/common/action/mainView';

import { defaultLibrary as library } from 'chord/library/core/library';

// TODO: check synchronal result
import { syncAdd } from 'chord/workbench/parts/mainView/browser/action/plugins/syncAddRemove';


export function handleAddLibrarySong(song: ISong): IAddLibrarySongAct {
    song.like = true;
    let librarySong = library.addSong(song);
    syncAdd(song);
    return {
        type: 'c:mainView:addLibrarySong',
        act: 'c:mainView:addLibrarySong',
        song: librarySong,
    };
}

export function handleAddLibraryArtist(artist: IArtist): IAddLibraryArtistAct {
    artist.like = true;
    let libraryArtist = library.addArtist(artist);
    syncAdd(artist);
    return {
        type: 'c:mainView:addLibraryArtist',
        act: 'c:mainView:addLibraryArtist',
        artist: libraryArtist,
    };
}

export function handleAddLibraryAlbum(album: IAlbum): IAddLibraryAlbumAct {
    album.like = true;
    let libraryAlbum = library.addAlbum(album);
    syncAdd(album);
    return {
        type: 'c:mainView:addLibraryAlbum',
        act: 'c:mainView:addLibraryAlbum',
        album: libraryAlbum,
    };
}

export function handleAddLibraryCollection(collection: ICollection): IAddLibraryCollectionAct {
    collection.like = true;
    let libraryCollection = library.addCollection(collection);
    syncAdd(collection);
    return {
        type: 'c:mainView:addLibraryCollection',
        act: 'c:mainView:addLibraryCollection',
        collection: libraryCollection,
    };
}

export function handleAddLibraryUserProfile(userProfile: IUserProfile): IAddLibraryUserProfileAct {
    userProfile.like = true;
    let libraryUserProfile = library.addUserProfile(userProfile);
    syncAdd(userProfile);
    return {
        type: 'c:mainView:addLibraryUserProfile',
        act: 'c:mainView:addLibraryUserProfile',
        userProfile: libraryUserProfile,
    };
}
