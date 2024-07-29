import { IElementConfig, svg } from '..';

/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
 */
export const defaultSources: Record<string, IElementConfig> = {
	appletv: {
		tap_action: { action: 'source', source: 'https://tv.apple.com' }, // UNTESTED
		icon: svg.appletv,
	},
	crunchyroll: {
		tap_action: { action: 'source', source: 'crunchyroll://' }, // UNTESTED
		icon: svg.crunchyroll,
	},
	dazn: {
		tap_action: { action: 'source', source: 'https://open.dazn.com/' }, // UNTESTED
		icon: svg.dazn,
	},
	discoveryplus: {
		tap_action: { action: 'source', source: 'discoveryplus://' }, // UNTESTED
		icon: svg.discovery,
	},
	disney: {
		tap_action: { action: 'source', source: 'https://www.disneyplus.com' },
		icon: svg.disney,
	},
	emby: {
		tap_action: {
			action: 'source',
			source: 'embyatv://tv.emby.embyatv/startapp',
		}, // UNTESTED
		icon: 'mdi:emby',
	},
	filmplus: {
		tap_action: {
			action: 'source',
			source: 'com.guideplus.co',
		},
		icon: svg.filmplus,
	},
	foxsports: {
		tap_action: { action: 'source', source: 'foxsports://live' }, // UNTESTED
		icon: svg.foxsports,
	},
	hulu: {
		tap_action: { action: 'source', source: 'hulu://' }, // BROKEN
		icon: 'mdi:hulu',
	},
	jellyfin: {
		tap_action: { action: 'source', source: 'org.jellyfin.androidtv' },
		icon: svg.jellyfin,
	},
	kijk: {
		tap_action: {
			action: 'source',
			source: 'com.talpa.kijk',
		},
		icon: svg.kijk,
	},
	max: {
		tap_action: {
			action: 'source',
			source: 'market://launch?id=com.wbd.stream',
		}, // BROKEN
		icon: svg.max,
	},
	mlbtv: {
		tap_action: { action: 'source', source: 'mlbatbat://' }, // UNTESTED
		icon: svg.mlbtv,
	},
	nba: {
		tap_action: { action: 'source', source: 'gametime://' }, // UNTESTED
		icon: svg.nba,
	},
	netflix: {
		tap_action: { action: 'source', source: 'netflix://' },
		icon: 'mdi:netflix',
	},
	npo_start: {
		tap_action: {
			action: 'source',
			source: 'nl.uitzendinggemist',
		},
		icon: svg.npo,
	},
	nrktv: {
		tap_action: {
			// UNTESTED
			action: 'source',
			source: 'nrktv://',
		},
		icon: svg.nrktv,
	},
	paramount: {
		tap_action: { action: 'source', source: 'com.cbs.ott' },
		icon: svg.paramount,
	},
	plex: {
		tap_action: { action: 'source', source: 'plex://' },
		icon: 'mdi:plex',
	},
	primevideo: {
		tap_action: { action: 'source', source: 'https://app.primevideo.com' },
		icon: svg.primevideo,
	},
	pia: {
		tap_action: { action: 'source', source: 'piavpn://' }, // UNTESTED
		icon: svg.pia,
	},
	rakutentv: {
		tap_action: { action: 'source', source: 'https://rakutentv.page.link' },
		icon: svg.rakutentv,
	},
	rakutenviki: {
		tap_action: { action: 'source', source: 'viki://home' }, // UNTESTED
		icon: svg.rakutenviki,
	},
	skyshowtime: {
		tap_action: {
			action: 'source',
			source: 'https://www.skyshowtime.com/deeplink',
		},
		icon: svg.showtime,
	},
	spotify: {
		tap_action: { action: 'source', source: 'spotify://' },
		icon: 'mdi:spotify',
	},
	starplus: {
		tap_action: { action: 'source', source: 'https://www.starplus.com' },
		icon: svg.starplus,
	},
	stremio: {
		tap_action: { action: 'source', source: 'stremio://' },
		icon: svg.stremio,
	},
	surfshark: {
		tap_action: {
			action: 'source',
			source: 'https://surfshark.com/locations-ul',
		}, // UNTESTED
		icon: svg.surfshark,
	},
	tv2play: {
		tap_action: {
			action: 'source',
			source: 'dk.tv2.tv2playtv://*.tv2.dk/android/dk.tv2.tv2playtv/callback',
		}, // UNTESTED
		icon: svg.tv2play,
	},
	viaplay: {
		tap_action: { action: 'source', source: 'viaplay://deeplink/film' }, // UNTESTED
		icon: svg.viaplay,
	},
	videoland: {
		tap_action: { action: 'source', source: 'videoland-v2://' },
		icon: svg.videoland,
	},
	vudu: {
		tap_action: { action: 'source', source: 'vuduapp://' },
		icon: svg.vudu,
	},
	youtube: {
		tap_action: { action: 'source', source: 'vnd.youtube://' },
		icon: 'mdi:youtube',
	},
	youtubetv: {
		tap_action: { action: 'source', source: 'https://tv.youtube.com' }, // UNTESTED
		icon: 'mdi:youtube-tv',
	},
};
