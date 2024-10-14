import Contains from '../../../../../nodes/scalarNodes/Contains';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlContainsNodeParser extends AbstractComparisonFiqlNodeParser {

	protected getOperatorName() {
		return 'contains';
	}

	protected createNode(field: any, value: any) {
		return new Contains(field, value);
	}
}
