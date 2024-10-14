import Alike from '../../../../../nodes/scalarNodes/Alike';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlAlikeNodeParser extends AbstractComparisonFiqlNodeParser {
	protected getOperatorName() {
		return 'alike';
	}

	protected createNode(field: any, value: any) {
		return new Alike(field, value);
	}
}
