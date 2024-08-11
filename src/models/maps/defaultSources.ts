import { IElementConfig, svg } from '..';

/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
 */
export const defaultSources: IElementConfig[] = [
	{
		type: 'button',
		name: 'appletv',
		tap_action: { action: 'source', source: 'https://tv.apple.com' }, // UNTESTED
		icon: svg.appletv,
	},
	{
		type: 'button',
		name: 'crunchyroll',
		tap_action: { action: 'source', source: 'crunchyroll://' }, // UNTESTED
		icon: svg.crunchyroll,
	},
	{
		type: 'button',
		name: 'dazn',
		tap_action: { action: 'source', source: 'https://open.dazn.com/' }, // UNTESTED
		icon: svg.dazn,
	},
	{
		type: 'button',
		name: 'discoveryplus',
		tap_action: { action: 'source', source: 'discoveryplus://' }, // UNTESTED
		icon: svg.discovery,
	},
	{
		type: 'button',
		name: 'disney',
		tap_action: { action: 'source', source: 'https://www.disneyplus.com' },
		icon: svg.disney,
	},
	{
		type: 'button',
		name: 'emby',
		tap_action: {
			action: 'source',
			source: 'embyatv://tv.emby.embyatv/startapp',
		}, // UNTESTED
		icon: 'mdi:emby',
	},
	{
		type: 'button',
		name: 'filmplus',
		tap_action: {
			action: 'source',
			source: 'com.guideplus.co',
		},
		icon: svg.filmplus,
	},
	{
		type: 'button',
		name: 'foxsports',
		tap_action: { action: 'source', source: 'foxsports://live' }, // UNTESTED
		icon: svg.foxsports,
	},
	{
		type: 'button',
		name: 'hulu',
		tap_action: { action: 'source', source: 'hulu://' }, // BROKEN
		icon: 'mdi:hulu',
	},
	{
		type: 'button',
		name: 'jellyfin',
		tap_action: { action: 'source', source: 'org.jellyfin.androidtv' },
		icon: svg.jellyfin,
	},
	{
		type: 'button',
		name: 'kijk',
		tap_action: {
			action: 'source',
			source: 'com.talpa.kijk',
		},
		icon: svg.kijk,
	},
	{
		type: 'button',
		name: 'max',
		tap_action: {
			action: 'source',
			source: 'market://launch?id=com.wbd.stream',
		}, // BROKEN
		icon: svg.max,
	},
	{
		type: 'button',
		name: 'mlbtv',
		tap_action: { action: 'source', source: 'mlbatbat://' }, // UNTESTED
		icon: svg.mlbtv,
	},
	{
		type: 'button',
		name: 'nba',
		tap_action: { action: 'source', source: 'gametime://' }, // UNTESTED
		icon: svg.nba,
	},
	{
		type: 'button',
		name: 'netflix',
		tap_action: { action: 'source', source: 'netflix://' },
		icon: 'mdi:netflix',
	},
	{
		type: 'button',
		name: 'npo_start',
		tap_action: {
			action: 'source',
			source: 'nl.uitzendinggemist',
		},
		icon: svg.npo,
	},
	{
		type: 'button',
		name: 'nrktv',
		tap_action: {
			// UNTESTED
			action: 'source',
			source: 'nrktv://',
		},
		icon: svg.nrktv,
	},
	{
		type: 'button',
		name: 'paramount',
		tap_action: { action: 'source', source: 'com.cbs.ott' },
		icon: svg.paramount,
	},
	{
		type: 'button',
		name: 'plex',
		tap_action: { action: 'source', source: 'plex://' },
		icon: 'mdi:plex',
	},
	{
		type: 'button',
		name: 'primevideo',
		tap_action: { action: 'source', source: 'https://app.primevideo.com' },
		icon: svg.primevideo,
	},
	{
		type: 'button',
		name: 'pia',
		tap_action: { action: 'source', source: 'piavpn://' }, // UNTESTED
		icon: svg.pia,
	},
	{
		type: 'button',
		name: 'rakutentv',
		tap_action: { action: 'source', source: 'https://rakutentv.page.link' },
		icon: svg.rakutentv,
	},
	{
		type: 'button',
		name: 'rakutenviki',
		tap_action: { action: 'source', source: 'viki://home' }, // UNTESTED
		icon: svg.rakutenviki,
	},
	{
		type: 'button',
		name: 'skyshowtime',
		tap_action: {
			action: 'source',
			source: 'https://www.skyshowtime.com/deeplink',
		},
		icon: svg.showtime,
	},
	{
		type: 'button',
		name: 'spotify',
		tap_action: { action: 'source', source: 'spotify://' },
		icon: 'mdi:spotify',
	},
	{
		type: 'button',
		name: 'starplus',
		tap_action: { action: 'source', source: 'https://www.starplus.com' },
		icon: svg.starplus,
	},
	{
		type: 'button',
		name: 'stremio',
		tap_action: { action: 'source', source: 'stremio://' },
		icon: svg.stremio,
	},
	{
		type: 'button',
		name: 'surfshark',
		tap_action: {
			action: 'source',
			source: 'https://surfshark.com/locations-ul',
		}, // UNTESTED
		icon: svg.surfshark,
	},
	{
		type: 'button',
		name: 'tv2play',
		tap_action: {
			action: 'source',
			source: 'dk.tv2.tv2playtv://*.tv2.dk/android/dk.tv2.tv2playtv/callback',
		}, // UNTESTED
		icon: svg.tv2play,
	},
	{
		type: 'button',
		name: 'viaplay',
		tap_action: { action: 'source', source: 'viaplay://deeplink/film' }, // UNTESTED
		icon: svg.viaplay,
	},
	{
		type: 'button',
		name: 'videoland',
		tap_action: { action: 'source', source: 'videoland-v2://' },
		icon: svg.videoland,
	},
	{
		type: 'button',
		name: 'vudu',
		tap_action: { action: 'source', source: 'vuduapp://' },
		icon: svg.vudu,
	},
	{
		type: 'button',
		name: 'youtube',
		tap_action: { action: 'source', source: 'vnd.youtube://' },
		icon: 'mdi:youtube',
	},
	{
		type: 'button',
		name: 'youtubetv',
		tap_action: { action: 'source', source: 'https://tv.youtube.com' }, // UNTESTED
		icon: 'mdi:youtube-tv',
	},
];
