// @ts-check
import path from 'path';
import fse from 'fs-extra';
import { pageToTitle } from 'docs/src/modules/utils/helpers';
import materialPages from 'docs/data/material/pages';
import systemPages from 'docs/data/system/pages';
import basePages from 'docs/data/base/pages';

const EXCLUDES = ['/api', '/blog', '/x/react-'];

async function run() {
  const translationsFilename = path.join(__dirname, '../translations/translations.json');
  const translationsFile = await fse.readFile(translationsFilename, 'utf8');
  /**
   * @type {{ pages: Record<String, string> }}
   */
  const output = JSON.parse(translationsFile);
  output.pages = {};

  /**
   * @param {readonly import('docs/src/pages').MuiPage[]} pages
   */
  const traverse = (pages) => {
    pages.forEach((page) => {
      if (
        (page.pathname !== '/' && page.pathname === '/api-docs') ||
        !EXCLUDES.some((exclude) => page.pathname.includes(exclude))
      ) {
        const title = pageToTitle(page);

        if (title) {
          const pathname = page.subheader || page.pathname;
          output.pages[pathname] = title;
        }
      }

      if (page.children) {
        traverse(page.children);
      }
    });
  };

  traverse([...systemPages, ...basePages, ...materialPages]);

  await fse.writeFile(translationsFilename, `${JSON.stringify(output, null, 2)}\n`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
