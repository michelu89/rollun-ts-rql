import { TokenTypeNameMap } from '../../../../Token';
import TokenStream from '../../../../TokenStream';
import { NodeParserInterface } from '../../../../interfaces';

export default abstract class AbstractFiqlBinaryNodeParser implements NodeParserInterface {
	protected abstract createNode(field: string): any;
	protected abstract getOperatorNames(): any;
	public abstract supports(tokenStream: TokenStream): any;
	public parse(tokenStream: TokenStream) {
	tokenStream.expect(TokenTypeNameMap.T_OPERATOR, this.getOperatorNames());
	tokenStream.expect(TokenTypeNameMap.T_OPEN_PARENTHESIS);
	const field = tokenStream.expect(TokenTypeNameMap.T_STRING).value;
	tokenStream.expect(TokenTypeNameMap.T_CLOSE_PARENTHESIS);
	return this.createNode(field);
}
}
