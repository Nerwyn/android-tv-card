import { IElementConfig } from '../../interfaces';

/**
 * https://www.home-assistant.io/integrations/androidtv#media_playerselect_source
 */
export const fireTVDefaultSources: IElementConfig[] = [
	{
		type: 'button',
		name: 'appletv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.apple.atve.amazon.appletv',
			},
		},
		icon: 'appletv',
	},
	{
		type: 'button',
		name: 'crunchyroll',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.crunchyroll.crunchyroid',
			},
		},
		icon: 'crunchyroll',
	},
	{
		type: 'button',
		name: 'dazn',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.dazn',
			},
		},
		icon: 'dazn',
	},
	{
		type: 'button',
		name: 'discoveryplus',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.discovery.discoveryplus.firetv',
			},
		},
		icon: 'discovery',
	},
	{
		type: 'button',
		name: 'disney',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.disney.disneyplus',
			},
		},
		icon: 'disney',
	},
	{
		type: 'button',
		name: 'emby',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'tv.emby.embyatv',
			},
		},
		icon: 'mdi:emby',
	},
	{
		type: 'button',
		name: 'f1tv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.formulaone.production',
			},
		},
		icon: 'f1tv',
	},
	{
		type: 'button',
		name: 'foxsports',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.foxsports.videogo',
			},
		},
		icon: 'foxsports',
	},
	{
		type: 'button',
		name: 'hulu',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.hulu.plus',
			},
		},
		icon: 'mdi:hulu',
	},
	{
		type: 'button',
		name: 'jellyfin',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'org.jellyfin.androidtv',
			},
		},
		icon: 'jellyfin',
	},
	{
		type: 'button',
		name: 'kodi',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'org.xbmc.kodi',
			},
		},
		icon: 'mdi:kodi',
	},
	{
		type: 'button',
		name: 'max',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.hbo.hbonow',
			},
		},
		icon: 'max',
	},
	{
		type: 'button',
		name: 'mlbtv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.bamnetworks.mobile.android.gameday.atbat',
			},
		},
		icon: 'mlbtv',
	},
	{
		type: 'button',
		name: 'netflix',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.netflix.ninja',
			},
		},
		icon: 'mdi:netflix',
	},
	{
		type: 'button',
		name: 'nrktv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'no.nrk.tv',
			},
		},
		icon: 'nrktv',
	},
	{
		type: 'button',
		name: 'pandora',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.pandora.android.gtv',
			},
		},
		icon: 'mdi:pandora',
	},
	{
		type: 'button',
		name: 'paramount',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.cbs.ott',
			},
		},
		icon: 'paramount',
	},
	{
		type: 'button',
		name: 'pia',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.privateinternetaccess.android',
			},
		},
		icon: 'pia',
	},
	{
		type: 'button',
		name: 'plex',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.plexapp.android',
			},
		},
		icon: 'mdi:plex',
	},
	{
		type: 'button',
		name: 'primevideo',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.amazon.firebat',
			},
		},
		icon: 'primevideo',
	},
	{
		type: 'button',
		name: 'skyshowtime',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.skyshowtime.skyshowtime.google',
			},
		},
		icon: 'showtime',
	},
	{
		type: 'button',
		name: 'spotify',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.spotify.tv.android',
			},
		},
		icon: 'mdi:spotify',
	},
	{
		type: 'button',
		name: 'steam',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.valvesoftware.steamlink',
			},
		},
		icon: 'mdi:steam',
	},
	{
		type: 'button',
		name: 'stremio',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.stremio.tv',
			},
		},
		icon: 'stremio',
	},
	{
		type: 'button',
		name: 'surfshark',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.surfshark.vpnclient.android',
			},
		},
		icon: 'surfshark',
	},
	{
		type: 'button',
		name: 'viaplay',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.viaplay.android',
			},
		},
		icon: 'viaplay',
	},
	{
		type: 'button',
		name: 'videoland',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'nl.rtl.videoland.v2.firetv',
			},
		},
		icon: 'videoland',
	},
	{
		type: 'button',
		name: 'vlc',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'org.videolan.vlc',
			},
		},
		icon: 'mdi:vlc',
	},
	{
		type: 'button',
		name: 'vudu',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.fandango.vudu.firetv',
			},
		},
		icon: 'vudu',
	},
	{
		type: 'button',
		name: 'waiputv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'de.exaring.waipu.firetv.live',
			},
		},
		icon: 'waiputv',
	},
	{
		type: 'button',
		name: 'wow',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'de.sky.online',
			},
		},
		icon: 'wow',
	},
	{
		type: 'button',
		name: 'youtube',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.amazon.firetv.youtube',
			},
		},
		icon: 'mdi:youtube',
	},
	{
		type: 'button',
		name: 'youtubetv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.amazon.firetv.tv',
			},
		},
		icon: 'mdi:youtube-tv',
	},
];
