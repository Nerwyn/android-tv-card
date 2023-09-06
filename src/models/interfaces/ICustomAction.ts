import { IServiceData } from '.';

export interface ICustomAction {
	service: string;
	service_data?: IServiceData;
	key?: string;
	source?: string;
	icon?: string;
	svg_path?: string;
}
