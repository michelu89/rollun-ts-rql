import Out from '../../../../../nodes/arrayNodes/Out';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlOutNodeParser extends AbstractComparisonFiqlNodeParser {

	protected getOperatorName() {
		return 'out';
	}

	protected createNode(field: any, value: any) {
		return new Out(field, value);
	}
}
