import React from 'react';
import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';

import circleProgressReadmeText from './README';
import circleProgressCode from '!raw!material-ui/lib/circular-progress';
import CircleProgressExampleSimple from './ExampleSimple';
import circleProgressExampleSimpleCode from '!raw!./ExampleSimple';
import CircleProgressExampleDeterminate from './ExampleDeterminate';
import circleProgressExampleDeterminateCode from '!raw!./ExampleDeterminate';

const descriptions = {
  indeterminate: 'By default, the indicator animates continuously.',
  determinate: 'In determinate mode, the indicator adjusts to show the percentage complete, ' +
  'as a ratio of `value`: `max-min`.',
};

const CircleProgressPage = () => (
  <div>
    <MarkdownElement text={circleProgressReadmeText} />
    <CodeExample
      code={circleProgressExampleSimpleCode}
      title="Indeterminate progress"
      description={descriptions.indeterminate}
    >
      <CircleProgressExampleSimple />
    </CodeExample>
    <CodeExample
      code={circleProgressExampleDeterminateCode}
      title="Determinate progress"
      description={descriptions.determinate}
    >
      <CircleProgressExampleDeterminate />
    </CodeExample>
    <PropTypeDescription code={circleProgressCode}/>
  </div>
);

export default CircleProgressPage;
