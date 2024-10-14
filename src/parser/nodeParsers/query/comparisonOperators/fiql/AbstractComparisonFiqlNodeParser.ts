import TokenStream from '../../../../TokenStream';
import AbstractComparisonOperatorNodeParser from '../AbstractComparisonOperatorNodeParser';
import { TokenTypeNameMap } from '../../../../Token';
import { cloneDeep } from '../../../../../utils/ObjectAndStringUtils';

export default abstract class AbstractComparisonFiqlNodeParser extends AbstractComparisonOperatorNodeParser {

	parse(tokenStream: TokenStream) {
		const field = this.fieldNameParser.parse(tokenStream);
		tokenStream.expect(TokenTypeNameMap.T_OPERATOR, this.getOperatorName());
		const value = this.valueParser.parse(tokenStream);
		return this.createNode(field, value);
	}

	supports(tokenStream: TokenStream) {
		try {
			tokenStream = cloneDeep(tokenStream);
			this.fieldNameParser.parse(tokenStream);
			return tokenStream.test(TokenTypeNameMap.T_OPERATOR, this.getOperatorName());
		} catch (error) {
			return false;
		}
	}
}
