import { IElementConfig, svg } from '..';

/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
 */
export const defaultSources: Record<string, IElementConfig> = {
	appletv: {
		type: 'button',
		tap_action: { action: 'source', source: 'https://tv.apple.com' }, // UNTESTED
		icon: svg.appletv,
	},
	crunchyroll: {
		type: 'button',
		tap_action: { action: 'source', source: 'crunchyroll://' }, // UNTESTED
		icon: svg.crunchyroll,
	},
	dazn: {
		type: 'button',
		tap_action: { action: 'source', source: 'https://open.dazn.com/' }, // UNTESTED
		icon: svg.dazn,
	},
	discoveryplus: {
		type: 'button',
		tap_action: { action: 'source', source: 'discoveryplus://' }, // UNTESTED
		icon: svg.discovery,
	},
	disney: {
		type: 'button',
		tap_action: { action: 'source', source: 'https://www.disneyplus.com' },
		icon: svg.disney,
	},
	emby: {
		type: 'button',
		tap_action: {
			action: 'source',
			source: 'embyatv://tv.emby.embyatv/startapp',
		}, // UNTESTED
		icon: 'mdi:emby',
	},
	filmplus: {
		type: 'button',
		tap_action: {
			action: 'source',
			source: 'com.guideplus.co',
		},
		icon: svg.filmplus,
	},
	foxsports: {
		type: 'button',
		tap_action: { action: 'source', source: 'foxsports://live' }, // UNTESTED
		icon: svg.foxsports,
	},
	hulu: {
		type: 'button',
		tap_action: { action: 'source', source: 'hulu://' }, // BROKEN
		icon: 'mdi:hulu',
	},
	jellyfin: {
		type: 'button',
		tap_action: { action: 'source', source: 'org.jellyfin.androidtv' },
		icon: svg.jellyfin,
	},
	kijk: {
		type: 'button',
		tap_action: {
			action: 'source',
			source: 'com.talpa.kijk',
		},
		icon: svg.kijk,
	},
	max: {
		type: 'button',
		tap_action: {
			action: 'source',
			source: 'market://launch?id=com.wbd.stream',
		}, // BROKEN
		icon: svg.max,
	},
	mlbtv: {
		type: 'button',
		tap_action: { action: 'source', source: 'mlbatbat://' }, // UNTESTED
		icon: svg.mlbtv,
	},
	nba: {
		type: 'button',
		tap_action: { action: 'source', source: 'gametime://' }, // UNTESTED
		icon: svg.nba,
	},
	netflix: {
		type: 'button',
		tap_action: { action: 'source', source: 'netflix://' },
		icon: 'mdi:netflix',
	},
	npo_start: {
		type: 'button',
		tap_action: {
			action: 'source',
			source: 'nl.uitzendinggemist',
		},
		icon: svg.npo,
	},
	nrktv: {
		type: 'button',
		tap_action: {
			// UNTESTED
			action: 'source',
			source: 'nrktv://',
		},
		icon: svg.nrktv,
	},
	paramount: {
		type: 'button',
		tap_action: { action: 'source', source: 'com.cbs.ott' },
		icon: svg.paramount,
	},
	plex: {
		type: 'button',
		tap_action: { action: 'source', source: 'plex://' },
		icon: 'mdi:plex',
	},
	primevideo: {
		type: 'button',
		tap_action: { action: 'source', source: 'https://app.primevideo.com' },
		icon: svg.primevideo,
	},
	pia: {
		type: 'button',
		tap_action: { action: 'source', source: 'piavpn://' }, // UNTESTED
		icon: svg.pia,
	},
	rakutentv: {
		type: 'button',
		tap_action: { action: 'source', source: 'https://rakutentv.page.link' },
		icon: svg.rakutentv,
	},
	rakutenviki: {
		type: 'button',
		tap_action: { action: 'source', source: 'viki://home' }, // UNTESTED
		icon: svg.rakutenviki,
	},
	skyshowtime: {
		type: 'button',
		tap_action: {
			action: 'source',
			source: 'https://www.skyshowtime.com/deeplink',
		},
		icon: svg.showtime,
	},
	spotify: {
		type: 'button',
		tap_action: { action: 'source', source: 'spotify://' },
		icon: 'mdi:spotify',
	},
	starplus: {
		type: 'button',
		tap_action: { action: 'source', source: 'https://www.starplus.com' },
		icon: svg.starplus,
	},
	stremio: {
		type: 'button',
		tap_action: { action: 'source', source: 'stremio://' },
		icon: svg.stremio,
	},
	surfshark: {
		type: 'button',
		tap_action: {
			action: 'source',
			source: 'https://surfshark.com/locations-ul',
		}, // UNTESTED
		icon: svg.surfshark,
	},
	tv2play: {
		type: 'button',
		tap_action: {
			action: 'source',
			source: 'dk.tv2.tv2playtv://*.tv2.dk/android/dk.tv2.tv2playtv/callback',
		}, // UNTESTED
		icon: svg.tv2play,
	},
	viaplay: {
		type: 'button',
		tap_action: { action: 'source', source: 'viaplay://deeplink/film' }, // UNTESTED
		icon: svg.viaplay,
	},
	videoland: {
		type: 'button',
		tap_action: { action: 'source', source: 'videoland-v2://' },
		icon: svg.videoland,
	},
	vudu: {
		type: 'button',
		tap_action: { action: 'source', source: 'vuduapp://' },
		icon: svg.vudu,
	},
	youtube: {
		type: 'button',
		tap_action: { action: 'source', source: 'vnd.youtube://' },
		icon: 'mdi:youtube',
	},
	youtubetv: {
		type: 'button',
		tap_action: { action: 'source', source: 'https://tv.youtube.com' }, // UNTESTED
		icon: 'mdi:youtube-tv',
	},
};
