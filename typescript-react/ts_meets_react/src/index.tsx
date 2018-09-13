import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';
import { Salut } from './components/Salut';

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <Salut compiler="TypeScript" framework="React" />
    </div>,
    document.getElementById("example")
);