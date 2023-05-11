import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from './constants/Paths';
import QuoteRoutes from './QuoteRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add QuoteRouter ** //

const quoteRouter = Router();

// Get one quote
quoteRouter.get(
  Paths.Quotes.GetOne,
  QuoteRoutes.getOne,
);


// Add QuoteRouter
apiRouter.use(Paths.Quotes.Base, quoteRouter);


// **** Export default **** //

export default apiRouter;
