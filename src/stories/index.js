import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import AgGridDemo from '../AgGridDemo';
import ReactTableDemo from '../ReactTableDemo';
import ReactDataGridDemo from '../ReactDataGridDemo';

storiesOf('ag-grid', module).add('simple table', () => <AgGridDemo />);

storiesOf('react-table', module)
  .add('simple table', () => <ReactTableDemo />);

storiesOf('react-data-grid', module)
  .add('simple table', () => <ReactDataGridDemo />);
