import { SubLexerInterface } from '../interfaces';
import Token, { TokenTypeNameMap } from '../Token';

export default class StringSubLexer implements SubLexerInterface {
	getTokenAt(code: any, cursor: any) {
		const matches = code.slice(cursor).match(new RegExp(/^([a-z0-9]|%[0-9a-f]{2})+/, 'i'));
		if (!matches || ctype_digit(matches[0])) {
			return null;
		}
		return new Token(
			TokenTypeNameMap.T_STRING,
			decodeURIComponent(matches[0]),
			cursor,
			cursor + matches[0].length
		);
	}
}

function ctype_digit(str: string): boolean {
	return /^[0-9]+$/.test(str);
}
