import { ISource, svg } from '.';

/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
 */
export const defaultSources: Record<string, ISource> = {
	appletv: {
		source: 'https://tv.apple.com', // UNTESTED
		svg_path: svg.APPLETV,
	},
	crunchyroll: {
		source: 'crunchyroll://', // UNTESTED
		svg_path: svg.CRUNCHYROLL,
	},
	disney: {
		source: 'https://www.disneyplus.com',
		svg_path: svg.DISNEY,
	},
	emby: {
		source: 'embyatv://tv.emby.embyatv/startapp', // UNTESTED
		icon: 'mdi:emby',
	},
	foxsports: {
		source: 'foxsports://live', // UNTESTED
		svg_path: svg.FOXSPORTS,
	},
	hulu: {
		source: 'hulu://', // BROKEN
		icon: 'mdi:hulu',
	},
	max: {
		source: 'https://play.max.com', // BROKEN
		svg_path: svg.MAX,
	},
	mlbtv: {
		source: 'mlbatbat://', // UNTESTED
		svg_path: svg.MLBTV,
	},
	nba: {
		source: 'gametime://', // UNTESTED
		svg_path: svg.NBA,
	},
	netflix: { source: 'netflix://', icon: 'mdi:netflix' },
	plex: {
		source: 'plex://',
		icon: 'mdi:plex',
	},
	primevideo: {
		source: 'https://app.primevideo.com',
		svg_path: svg.PRIMEVIDEO,
	},
	pia: {
		source: 'piavpn://', // UNTESTED
		svg_path: svg.PIA,
	},
	rakutenviki: {
		source: 'viki://home', // UNTESTED
		svg_path: svg.RAKUTENVIKI,
	},
	skyshowtime: {
		source: 'https://www.skyshowtime.com/deeplink', // UNTESTED
		svg_path: svg.SHOWTIME,
	},
	spotify: { source: 'spotify://', icon: 'mdi:spotify' },
	surfshark: {
		source: 'https://surfshark.com/locations-ul', // UNTESTED
		svg_path: svg.SURFSHARK,
	},
	videoland: {
		source: 'videoland-v2://',
		svg_path: svg.VIDEOLAND,
	},
	vudu: {
		source: 'vuduapp://',
		svg_path: svg.VUDU,
	},
	youtube: { source: 'vnd.youtube://', icon: 'mdi:youtube' },
	youtubetv: {
		source: 'https://tv.youtube.com', // UNTESTED
		icon: 'mdi:youtube-tv',
	},
};
