import { Either, Left } from 'purify-ts/Either'
import { QuoteCodec, Quote } from '../data/quoteCodec'

// **** Variables **** //
const ALPHA_VANTAGE_API_KEY = 'api_key_here'

// **** Functions **** //
async function getQuote(ticker: string): Promise<Either<Error, Quote>> {
  try {
    const fetchResult = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`, { method: 'GET' })
    const json: any = await fetchResult.json();
    const data = json['Global Quote'];
    const decoded = QuoteCodec.decode(data)

    return decoded.bimap(
      (errors) => new Error('Failed to decode data'),
      (decoded) => decoded
    )

  } catch (error) {
    return Left(error) as Either<Error, Quote>
  }
}

// **** Export default **** //
export default {
  getQuote,
} as const;
