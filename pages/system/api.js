import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('docs/src/pages/system/api', false, /\.md|\.js$/);
const reqSource = require.context('!raw-loader!../../docs/src/pages/system/api', false, /\.js$/);
const reqPrefix = 'pages/system/api';

function Page() {
  return <MarkdownDocs req={req} reqSource={reqSource} reqPrefix={reqPrefix} />;
}

export default Page;
