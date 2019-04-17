import { assert } from 'chai';
import consoleErrorMock from 'test/utils/consoleErrorMock';
import createGenerateClassName from './createGenerateClassName';

describe('createGenerateClassName', () => {
  const generateClassName = createGenerateClassName();
  const generateClassNameGlobal = createGenerateClassName({ dangerouslyUseGlobalCSS: true });

  describe('dangerouslyUseGlobalCSS', () => {
    it('should have a stable classname', () => {
      assert.strictEqual(
        generateClassNameGlobal(
          {
            key: 'key',
          },
          {
            options: {
              name: 'MuiGrid',
            },
          },
        ),
        'MuiGrid-key',
      );
      assert.strictEqual(
        generateClassNameGlobal(
          {
            key: 'key',
          },
          {
            rules: {
              raw: {
                key: () => ({}),
              },
            },
            options: {
              link: true,
              classNamePrefix: 'classNamePrefix',
            },
          },
        ),
        'classNamePrefix-key-1',
      );
    });
  });

  it('should generate a class name', () => {
    assert.strictEqual(
      generateClassName(
        {
          key: 'key',
        },
        {
          rules: {
            raw: {
              key: {
                flex: 1,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: 'classNamePrefix',
          },
        },
      ),
      'classNamePrefix-key-1',
    );
  });

  it('should increase the counter only when needed', () => {
    assert.strictEqual(
      generateClassName(
        {
          key: 'key',
        },
        {
          rules: {
            raw: {
              key: {
                flex: 1,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: 'classNamePrefix',
          },
        },
      ),
      'classNamePrefix-key-2',
    );
    assert.strictEqual(
      generateClassName(
        {
          key: 'key',
        },
        {
          rules: {
            raw: {
              key: () => ({}),
            },
          },
          options: {
            link: true,
            classNamePrefix: 'classNamePrefix',
          },
        },
      ),
      'classNamePrefix-key-3',
    );
    assert.strictEqual(
      generateClassName(
        {
          key: 'key',
        },
        {
          rules: {
            raw: {
              key: () => ({}),
            },
          },
          options: {
            link: true,
            classNamePrefix: 'classNamePrefix',
          },
        },
      ),
      'classNamePrefix-key-4',
    );
  });

  it('should use the theme object, rule key and the style raw', () => {
    assert.strictEqual(
      generateClassName(
        {
          key: 'key1',
        },
        {
          rules: {
            raw: {
              key1: {
                flex: 1,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: 'classNamePrefix',
          },
        },
      ),
      'classNamePrefix-key1-5',
    );
    assert.strictEqual(
      generateClassName(
        {
          key: 'key2',
        },
        {
          rules: {
            raw: {
              key2: {
                flex: 1,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: 'classNamePrefix',
          },
        },
      ),
      'classNamePrefix-key2-6',
    );
    assert.strictEqual(
      generateClassName(
        {
          key: 'key2',
        },
        {
          rules: {
            raw: {
              key2: {
                flex: 2,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: 'classNamePrefix',
          },
        },
      ),
      'classNamePrefix-key2-7',
    );
    assert.strictEqual(
      generateClassName(
        {
          key: 'key2',
        },
        {
          rules: {
            raw: {
              key2: {
                flex: 2,
              },
            },
          },
          options: {
            theme: {
              spacing: 4,
            },
            classNamePrefix: 'classNamePrefix',
          },
        },
      ),
      'classNamePrefix-key2-8',
    );
  });

  describe('classNamePrefix', () => {
    it('should work without a classNamePrefix', () => {
      const rule = { key: 'root' };
      const styleSheet = {
        rules: { raw: {} },
        options: {},
      };
      const generateClassName2 = createGenerateClassName();
      assert.strictEqual(generateClassName2(rule, styleSheet), 'root-1');
    });
  });

  describe('production', () => {
    // Only run the test on node.
    if (!/jsdom/.test(window.navigator.userAgent)) {
      return;
    }

    let nodeEnv;
    const env = process.env;

    before(() => {
      nodeEnv = env.NODE_ENV;
      env.NODE_ENV = 'production';
      consoleErrorMock.spy();
    });

    after(() => {
      env.NODE_ENV = nodeEnv;
      consoleErrorMock.reset();
    });

    it('should output a short representation', () => {
      const rule = { key: 'root' };
      const styleSheet = {
        rules: { raw: {} },
        options: {},
      };
      const generateClassName2 = createGenerateClassName();
      assert.strictEqual(generateClassName2(rule, styleSheet), 'jss1');
    });
  });
});
