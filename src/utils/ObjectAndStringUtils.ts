/**
 * Adds backslashes before characters that are listed in the charlist.
 * @param {string} str - The string to be escaped.
 * @param {string} charlist - A list of characters to be escaped.
 * @returns {string} - The escaped string.
 */
export function addcslashes(str: string, charlist: string): string {
	const targetChars = charlist.split('').filter(char => char !== '*').map((char) => `\\${char}`).join('|');
	const regex = new RegExp(`[${targetChars}]`, 'g');
	return str.replace(regex, (match) => `\\${match}`);
}

/**
 * Removes backslashes from a string.
 * @param {string} str - The string to be unescaped.
 * @returns {string} - The unescaped string.
 */
export function stripslashes(str: string): string {
	return str.replace(/\\(.)/g, '$1');
}

/**
 * Translates characters or replaces substrings in a string.
 * @param {string} str - The string to be translated.
 * @param {{[key: string]: string}} replacePairs - An object containing the replacement pairs.
 * @returns {string} - The translated string.
 */
export function strtr(str: string, replacePairs: { [key: string]: string }): string {
	return str.replace(
		new RegExp(Object.keys(replacePairs).join('|'), 'g'),
		(matched) => replacePairs[matched]
	);
}

/**
 * Escapes regular expression characters in a string.
 * @param {string} str - The string to be escaped.
 * @param {string} [delimiter] - An optional delimiter to be escaped.
 * @returns {string} - The escaped string.
 */
export function pregQuote(str: string, delimiter: string = ''): string {
	return str.replace(new RegExp(`[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\${delimiter}]`, 'g'), '\\$&');
}

/**
 * Deeply clones a value.
 * @template T
 * @param {T} value - The value to be cloned.
 * @param {WeakMap} [seen] - A WeakMap to handle circular references.
 * @returns {T} - The cloned value.
 */
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
		if (Object.prototype.hasOwnProperty.call(value, key)) {
			clonedObj[key] = cloneDeep((value as any)[key], seen);
		}
	}

	return clonedObj as T;
}
