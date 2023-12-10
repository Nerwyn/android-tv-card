import { IActions, svg } from '.';

/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
 */
export const defaultSources: Record<string, IActions> = {
	appletv: {
		tap_action: { action: 'source', source: 'https://tv.apple.com' }, // UNTESTED
		svg_path: svg.APPLETV,
	},
	crunchyroll: {
		tap_action: { action: 'source', source: 'crunchyroll://' }, // UNTESTED
		svg_path: svg.CRUNCHYROLL,
	},
	disney: {
		tap_action: { action: 'source', source: 'https://www.disneyplus.com' },
		svg_path: svg.DISNEY,
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
		svg_path: svg.FOXSPORTS,
	},
	hulu: {
		tap_action: { action: 'source', source: 'hulu://' }, // BROKEN
		icon: 'mdi:hulu',
	},
	max: {
		tap_action: { action: 'source', source: 'https://play.max.com' }, // BROKEN
		svg_path: svg.MAX,
	},
	mlbtv: {
		tap_action: { action: 'source', source: 'mlbatbat://' }, // UNTESTED
		svg_path: svg.MLBTV,
	},
	nba: {
		tap_action: { action: 'source', source: 'gametime://' }, // UNTESTED
		svg_path: svg.NBA,
	},
	netflix: {
		tap_action: { action: 'source', source: 'netflix://' },
		icon: 'mdi:netflix',
	},
	plex: {
		tap_action: { action: 'source', source: 'plex://' },
		icon: 'mdi:plex',
	},
	primevideo: {
		tap_action: { action: 'source', source: 'https://app.primevideo.com' },
		svg_path: svg.PRIMEVIDEO,
	},
	pia: {
		tap_action: { action: 'source', source: 'piavpn://' }, // UNTESTED
		svg_path: svg.PIA,
	},
	rakutentv: {
		tap_action: { action: 'source', source: 'https://rakutentv.page.link' },
		svg_path: svg.RAKUTENTV,
	},
	rakutenviki: {
		tap_action: { action: 'source', source: 'viki://home' }, // UNTESTED
		svg_path: svg.RAKUTENVIKI,
	},
	skyshowtime: {
		tap_action: {
			action: 'source',
			source: 'https://www.skyshowtime.com/deeplink',
		},
		svg_path: svg.SHOWTIME,
	},
	spotify: {
		tap_action: { action: 'source', source: 'spotify://' },
		icon: 'mdi:spotify',
	},
	surfshark: {
		tap_action: {
			action: 'source',
			source: 'https://surfshark.com/locations-ul',
		}, // UNTESTED
		svg_path: svg.SURFSHARK,
	},
	videoland: {
		tap_action: { action: 'source', source: 'videoland-v2://' },
		svg_path: svg.VIDEOLAND,
	},
	vudu: {
		tap_action: { action: 'source', source: 'vuduapp://' },
		svg_path: svg.VUDU,
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
