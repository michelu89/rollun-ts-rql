import In from '../../../../../nodes/arrayNodes/In';
import AbstractComparisonRqlNodeParser from './AbstractComparisonRqlNodeParser';

export default class InNodeParser extends AbstractComparisonRqlNodeParser {

	protected getOperatorName() {
		return 'in';
	}

	protected createNode(field: any, value: any) {
		return new In(field, value);
	}
}
