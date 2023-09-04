import { serviceData } from '.';

export interface customAction {
	service: string;
	service_data?: serviceData;
	key?: string;
	source?: string;
	icon?: string;
	svg_path?: string;
}
