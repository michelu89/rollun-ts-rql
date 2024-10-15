import { SubLexerInterface } from '../interfaces';
import Token, { TokenTypeNameMap } from '../Token';

/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
export enum FiqlOperatorMap {
	'=' = 'eq',
	'==' = 'eq',
	'!=' = 'ne',
	'<>' = 'ne',
	'>' = 'gt',
	'<' = 'lt',
	'>=' = 'ge',
	'<=' = 'le',
}

export default class FiqlOperatorSubLexer implements SubLexerInterface {
	getTokenAt(code: any, cursor: any) {
		const matches = code.slice(cursor).match(new RegExp('^(=[a-z]\\w*=|!=|<>|>=|<=|<|>|==|=)', 'i'));
		if (matches) {
			return new Token(
				TokenTypeNameMap.T_OPERATOR,
				this.getValue(matches[0]),
				cursor,
				cursor + matches[0].length
			);
		} else {
			return null;
		}
	}

	private getValue(match: any) {
		if (((FiqlOperatorMap as any)[match])) {
			return (FiqlOperatorMap as any)[match];
		} else {
			return match.slice(1, -1);
		}
	}
}
