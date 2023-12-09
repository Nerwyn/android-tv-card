import { IAction, svg } from '.';

/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
 */
export const defaultSources: Record<string, IAction> = {
	appletv: {
		tap_action: { source: 'https://tv.apple.com' }, // UNTESTED
		svg_path: svg.APPLETV,
	},
	crunchyroll: {
		tap_action: { source: 'crunchyroll://' }, // UNTESTED
		svg_path: svg.CRUNCHYROLL,
	},
	disney: {
		tap_action: { source: 'https://www.disneyplus.com' },
		svg_path: svg.DISNEY,
	},
	emby: {
		tap_action: { source: 'embyatv://tv.emby.embyatv/startapp' }, // UNTESTED
		icon: 'mdi:emby',
	},
	foxsports: {
		tap_action: { source: 'foxsports://live' }, // UNTESTED
		svg_path: svg.FOXSPORTS,
	},
	hulu: {
		tap_action: { source: 'hulu://' }, // BROKEN
		icon: 'mdi:hulu',
	},
	max: {
		tap_action: { source: 'https://play.max.com' }, // BROKEN
		svg_path: svg.MAX,
	},
	mlbtv: {
		tap_action: { source: 'mlbatbat://' }, // UNTESTED
		svg_path: svg.MLBTV,
	},
	nba: {
		tap_action: { source: 'gametime://' }, // UNTESTED
		svg_path: svg.NBA,
	},
	netflix: { tap_action: { source: 'netflix://' }, icon: 'mdi:netflix' },
	plex: {
		tap_action: { source: 'plex://' },
		icon: 'mdi:plex',
	},
	primevideo: {
		tap_action: { source: 'https://app.primevideo.com' },
		svg_path: svg.PRIMEVIDEO,
	},
	pia: {
		tap_action: { source: 'piavpn://' }, // UNTESTED
		svg_path: svg.PIA,
	},
	rakutentv: {
		tap_action: { source: 'https://rakutentv.page.link' },
		svg_path: svg.RAKUTENTV,
	},
	rakutenviki: {
		tap_action: { source: 'viki://home' }, // UNTESTED
		svg_path: svg.RAKUTENVIKI,
	},
	skyshowtime: {
		tap_action: { source: 'https://www.skyshowtime.com/deeplink' },
		svg_path: svg.SHOWTIME,
	},
	spotify: { tap_action: { source: 'spotify://' }, icon: 'mdi:spotify' },
	surfshark: {
		tap_action: { source: 'https://surfshark.com/locations-ul' }, // UNTESTED
		svg_path: svg.SURFSHARK,
	},
	videoland: {
		tap_action: { source: 'videoland-v2://' },
		svg_path: svg.VIDEOLAND,
	},
	vudu: {
		tap_action: { source: 'vuduapp://' },
		svg_path: svg.VUDU,
	},
	youtube: { tap_action: { source: 'vnd.youtube://' }, icon: 'mdi:youtube' },
	youtubetv: {
		tap_action: { source: 'https://tv.youtube.com' }, // UNTESTED
		icon: 'mdi:youtube-tv',
	},
};
