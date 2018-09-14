import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import { Sample } from './components/Sample'

ReactDOM.render(
    <Sample compiler="Typescript" />,
    document.getElementById("example")
);