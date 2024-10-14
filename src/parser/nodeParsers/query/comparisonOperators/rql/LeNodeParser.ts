import AbstractComparisonRqlNodeParser from './AbstractComparisonRqlNodeParser';
import Le from '../../../../../nodes/scalarNodes/Le';

export default class LeNodeParser extends AbstractComparisonRqlNodeParser {

	protected getOperatorName() {
		return 'le';
	}

	protected createNode(field: any, value: any) {
		return new Le(field, value);
	}
}
