import AbstractComparisonRqlNodeParser from './AbstractComparisonRqlNodeParser';
import Contains from '../../../../../nodes/scalarNodes/Contains';

export default class ContainsNodeParser extends AbstractComparisonRqlNodeParser {

	protected getOperatorName() {
		return 'contains';
	}

	protected createNode(field: any, value: any) {
		return new Contains(field, value);
	}
}
