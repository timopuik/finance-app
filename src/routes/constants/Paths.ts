/**
 * Express router paths go here.
 */
import { Immutable } from 'src/other/types';

const Paths = {
  Base: '/api',
  Quotes: {
    Base: '/quotes',
    GetOne: '/:id',
  },
};


// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
