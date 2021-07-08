import * as React from 'react';
import TopLayoutBlog from 'docs/src/modules/components/TopLayoutBlog';
import { docs } from './michal-dudak-joining.md?@material-ui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
