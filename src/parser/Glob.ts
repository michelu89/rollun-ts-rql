import { addcslashes, pregQuote, stripslashes, strtr } from '../utils/ObjectAndStringUtils';

export default class Glob {
	private readonly glob: string;

	constructor(glob: string) {
		this.glob = glob;
	}

	static encode(value: string): string {
		return addcslashes(value, '\\?*');
	}

	toString() {
		return this.glob;
	}

	private decoder(many: string, one: string, escaper: (str: string) => string) {
		return this.glob.replace(/\\\\.|\*|\?|./, (match: string) => {
			if (match[0] === '*') {
				return many;
			}

			if (match[0] === '?') {
				return one;
			}
			return escaper(stripslashes(match[0]));
		});
	}

	toRql(): string {
		return this.decoder('*', '?', (char: string) => {
			return strtr(encodeURIComponent(char), {
				'-': '%2D',
				'_': '%5F',
				'.': '%2E',
				'~': '%7E',
			});
		});
	}

	toRegex(): string {
		const regex = this.decoder(
			'.*',
			'.',
			function (char: string) {
				return pregQuote(char, '/');
			}
		);
		return '^' + regex + '$';
	}

	toLike() {
		return this.decoder(
			'%',
			'_',
			function ($char) {
				return addcslashes($char, '\\%_');
			}
		);
	}
}
