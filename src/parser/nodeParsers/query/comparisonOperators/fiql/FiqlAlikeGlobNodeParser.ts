import AlikeGlob from '../../../../../nodes/scalarNodes/AlikeGlob';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlAlikeGlobNodeParser extends AbstractComparisonFiqlNodeParser {
	protected getOperatorName() {
		return 'alike';
	}

	protected createNode(field: any, value: any) {
		return new AlikeGlob(field, value);
	}
}
