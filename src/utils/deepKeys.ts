export function getDeepKeys(obj: object): string[] {
	let keys: string[] = [];
	for (const key in obj) {
		if (typeof obj[key as keyof object] === 'object') {
			const subkeys = getDeepKeys(obj[key as keyof object]);
			keys = keys.concat(subkeys.map((subkey) => key + '.' + subkey));
		} else {
			keys.push(key);
		}
	}
	return keys;
}

export function deepGet(obj: object, key: string) {
	const keys = key.split('.');
	if (obj == undefined) {
		return undefined as unknown as object;
	}
	if (keys.length == 1) {
		return obj[keys[0] as keyof object];
	}
	return deepGet(obj[keys[0] as keyof object], keys.splice(1).join('.'));
}

export function deepSet(
	obj: object,
	key: string,
	value: string | number | boolean | string[],
): object {
	const keys = key.split('.');
	if (keys.length == 1) {
		obj[keys[0] as keyof object] = value as never;
	} else {
		if (
			!(keys[0] in obj) ||
			!(typeof obj[keys[0] as keyof object] == 'object')
		) {
			if (/^-?\d+$/.test(keys[1])) {
				obj[keys[0] as keyof object] = new Array(
					parseInt(keys[1]),
				) as never;
			} else {
				obj[keys[0] as keyof object] = {} as never;
			}
		}
		deepSet(obj[keys[0] as keyof object], keys.splice(1).join('.'), value);
	}
	return obj;
}

export function mergeDeep(target: object, ...sources: [object]): object {
	function isObject(item: object) {
		return item && typeof item === 'object' && !Array.isArray(item);
	}

	if (!sources.length) {
		return target;
	}
	const source: object = sources.shift() as object;

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key as keyof object])) {
				if (!target[key as keyof object])
					Object.assign(target, { [key]: {} });
				mergeDeep(
					target[key as keyof object],
					source[key as keyof object],
				);
			} else {
				Object.assign(target, {
					[key]: source[key as keyof object],
				});
			}
		}
	}

	return mergeDeep(target, ...sources);
}
