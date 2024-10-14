import Contains from '../../../../../nodes/scalarNodes/Contains';
import AbstractComparisonRqlNodeParser from './AbstractComparisonRqlNodeParser';

export default class MatchNodeParser extends AbstractComparisonRqlNodeParser {
	protected getOperatorName() {
		return 'match';
	}

	protected createNode(field: any, value: any) {
		return new Contains(field, value);
	}
}
