import LikeGlob from '../../../../../nodes/scalarNodes/LikeGlob';
import AbstractComparisonFiqlNodeParser from './AbstractComparisonFiqlNodeParser';

export default class FiqlLikeGlobNodeParser extends AbstractComparisonFiqlNodeParser {
	protected getOperatorName() {
		return 'like';
	}

	protected createNode(field: any, value: any) {
		return new LikeGlob(field, value);
	}
}
