import Eq from '../../../../../nodes/scalarNodes/Eq';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlEqNodeParser extends AbstractComparisonFiqlNodeParser {

	protected getOperatorName() {
		return 'eq';
	}

	protected createNode(field: any, value: any) {
		return new Eq(field, value);
	}
}
