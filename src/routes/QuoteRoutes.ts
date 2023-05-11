import HttpStatusCodes from 'src/constants/HttpStatusCodes';
import QuoteService from 'src/services/QuoteService';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get one quote
 */
async function getOne(_: IReq, res: IRes) {
  const quoteEither = await QuoteService.getQuote(_.params.id)
  const quote = quoteEither.extract();
  if (quoteEither.isLeft()) {
    const error = quoteEither.extract();
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }

  res.setHeader('Content-Type', 'application/json');
  const quoteJson = JSON.parse(JSON.stringify(quote));
  const jsonResponse = { quote: quoteJson };
  const jsonResponseString = JSON.stringify(jsonResponse);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(jsonResponseString);
}

// **** Export default **** //

export default {
  getOne,
} as const;
