import Out from '../../../../../nodes/arrayNodes/Out';
import AbstractComparisonRqlNodeParser from './AbstractComparisonRqlNodeParser';

export default class OutNodeParser extends AbstractComparisonRqlNodeParser {

	protected getOperatorName() {
		return 'out';
	}

	protected createNode(field: any, value: any) {
		return new Out(field, value);
	}
}
