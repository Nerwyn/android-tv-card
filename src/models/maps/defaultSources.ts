import { IActions, svg } from '..';

/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
 */
export const defaultSources: Record<string, IActions> = {
	appletv: {
		tap_action: { action: 'source', source: 'https://tv.apple.com' }, // UNTESTED
		icon: svg.appletv,
	},
	crunchyroll: {
		tap_action: { action: 'source', source: 'crunchyroll://' }, // UNTESTED
		icon: svg.crunchyroll,
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
	foxsports: {
		tap_action: { action: 'source', source: 'foxsports://live' }, // UNTESTED
		icon: svg.foxsports,
	},
	hulu: {
		tap_action: { action: 'source', source: 'hulu://' }, // BROKEN
		icon: 'mdi:hulu',
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
	paramount: {
		tap_action: {
			action: 'source',
			source: 'https://www.paramountplus.com/',
		},
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
