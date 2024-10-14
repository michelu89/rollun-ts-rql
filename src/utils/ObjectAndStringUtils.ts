export function addcslashes(str: string, charlist: string): string {
	const targetChars = charlist.split('').filter(char => char !== '*').map((char) => `\\${char}`).join('|');
	const regex = new RegExp(`[${targetChars}]`, 'g');
	return str.replace(regex, (match) => `\\${match}`);
}

export function stripslashes(str: string): string {
	return str.replace(/\\(.)/g, '$1');
}

export function strtr(str: string, replacePairs: { [key: string]: string }): string {
	return str.replace(
		new RegExp(Object.keys(replacePairs).join('|'), 'g'),
		(matched) => replacePairs[matched]
	);
}

export function pregQuote(str: string, delimiter: string = ''): string {
	return str.replace(new RegExp(`[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\${delimiter}]`, 'g'), '\\$&');
}

export function cloneDeep<T>(value: T, seen = new WeakMap()): T {
	if (value === null || typeof value !== 'object') {
		return value;
	}

	if (seen.has(value)) {
		return seen.get(value);
	}

	if (value instanceof Date) {
		return new Date(value.getTime()) as unknown as T;
	}

	if (value instanceof RegExp) {
		return new RegExp(value) as unknown as T;
	}

	if (Array.isArray(value)) {
		const copy = [] as unknown as T;
		seen.set(value, copy);
		(value as any[]).forEach((item, index) => {
			(copy as any)[index] = cloneDeep(item, seen);
		});
		return copy;
	}

	// Create a new object with the same prototype as the original
	const clonedObj = Object.create(Object.getPrototypeOf(value));
	seen.set(value, clonedObj);

	for (const key in value) {
		if (value.hasOwnProperty(key)) {
			clonedObj[key] = cloneDeep((value as any)[key], seen);
		}
	}

	return clonedObj as T;
}
