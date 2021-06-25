import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import {
  demos,
  docs,
  requireDemo,
} from '!@material-ui/markdown/loader!docs/src/pages/discover-more/related-projects/related-projects.md';

export default function Page() {
  return <MarkdownDocs demos={demos} docs={docs} requireDemo={requireDemo} />;
}
