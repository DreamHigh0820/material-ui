import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from './tree-item.md';

function Page() {
  return <MarkdownDocs markdown={markdown} />;
}

export default Page;
