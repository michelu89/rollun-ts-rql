import AbstractComparisonRqlNodeParser from './AbstractComparisonRqlNodeParser';
import Ne from '../../../../../nodes/scalarNodes/Ne';

export default class NeNodeParser extends AbstractComparisonRqlNodeParser {

	protected getOperatorName() {
		return 'ne';
	}

	protected createNode(field: any, value: any) {
		return new Ne(field, value);
	}
}
