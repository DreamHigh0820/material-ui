import path from 'path';
import { expect } from 'chai';
import jscodeshift from 'jscodeshift';
import transform from './fab-variant';
import readFile from '../util/readFile';

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@material-ui/codemod', () => {
  describe('v5.0.0', () => {
    describe('fab-variant', () => {
      it('transforms as needed', () => {
        const actual = transform(
          {
            source: read('./fab-variant.test/actual.js'),
            path: require.resolve('./fab-variant.test/actual.js'),
          },
          { jscodeshift },
          {},
        );

        const expected = read('./fab-variant.test/expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });

      it('should be idempotent', () => {
        const actual = transform(
          {
            source: read('./fab-variant.test/expected.js'),
            path: require.resolve('./fab-variant.test/expected.js'),
          },
          { jscodeshift },
          {},
        );

        const expected = read('./fab-variant.test/expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });
    });
  });
});
