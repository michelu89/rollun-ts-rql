import In from '../../../../../nodes/arrayNodes/In';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlInNodeParser extends AbstractComparisonFiqlNodeParser {

	protected getOperatorName() {
		return 'in';
	}

	protected createNode(field: any, value: any) {
		return new In(field, value);
	}
}
