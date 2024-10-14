import { SubLexerInterface } from '../interfaces';
import Token, { TokenTypeNameMap } from '../Token';

export default class SortSubLexer implements SubLexerInterface {

	getTokenAt(code: any, cursor: any) {
		const test = code.slice(cursor, cursor + 1);
		if (test === '-') {
			return new Token(TokenTypeNameMap.T_MINUS, '-', cursor, cursor + 1);
		}
		if (test === '+') {
			return new Token(TokenTypeNameMap.T_PLUS, '+', cursor, cursor + 1);
		} else {
			return null;
		}
	}
}
