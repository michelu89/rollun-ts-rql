import Ne from '../../../../../nodes/scalarNodes/Ne';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlNeNodeParser extends AbstractComparisonFiqlNodeParser {

	protected getOperatorName() {
		return 'ne';
	}

	protected createNode(field: any, value: any) {
		return new Ne(field, value);
	}
}
