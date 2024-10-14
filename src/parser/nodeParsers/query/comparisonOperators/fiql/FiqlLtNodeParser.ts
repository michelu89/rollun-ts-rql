import Lt from '../../../../../nodes/scalarNodes/Lt';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlLtNodeParser extends AbstractComparisonFiqlNodeParser {

	protected getOperatorName() {
		return 'lt';
	}

	protected createNode(field: any, value: any) {
		return new Lt(field, value);
	}
}
