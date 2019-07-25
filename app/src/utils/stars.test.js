import { roundStar } from './roundingStars'

describe('Image utils', () => {
  describe('get full ratings', () => {
    it('should return rounded number', () => {
        const product = {
            averageRating: 4.6
        };
        
      const rating = roundStar(product.averageRating);
      const expected = 5

      expect(rating).toEqual(expected);
    });
  });
});
