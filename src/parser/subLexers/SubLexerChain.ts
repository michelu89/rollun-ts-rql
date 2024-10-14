import { SubLexerInterface } from '../interfaces';

export default class SubLexerChain implements SubLexerInterface {

	private subLexers: SubLexerInterface[] = [];

	addSubLexer(subLexer: SubLexerInterface) {
		this.subLexers.push(subLexer);
		return this;
	}

	getTokenAt(code: any, cursor: any) {
		for (const subLexer of this.subLexers) {
			const token = subLexer.getTokenAt(code, cursor);
			if (token !== null) {
				return token;
			}
		}
		return null;
	}
}
