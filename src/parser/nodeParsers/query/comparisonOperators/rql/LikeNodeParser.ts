import AbstractComparisonRqlNodeParser from './AbstractComparisonRqlNodeParser';
import Like from '../../../../../nodes/scalarNodes/Like';

export default class LikeNodeParser extends AbstractComparisonRqlNodeParser {

	protected getOperatorName() {
		return 'like';
	}

	protected createNode(field: any, value: any) {
		return new Like(field, value);
	}
}
