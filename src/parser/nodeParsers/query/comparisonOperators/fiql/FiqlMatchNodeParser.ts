import Contains from '../../../../../nodes/scalarNodes/Contains';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlMatchNodeParser extends AbstractComparisonFiqlNodeParser {
	protected getOperatorName() {
		return 'match';
	}

	protected createNode(field: any, value: any) {
		return new Contains(field, value);
	}
}
