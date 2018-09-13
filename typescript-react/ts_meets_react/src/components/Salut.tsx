import * as React from 'react';

export interface SalutProps {compiler: string; framework: string;}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Salut extends React.Component<SalutProps, {}> {
    render() {
        return <h1>Salut {this.props.compiler} et {this.props.framework}!</h1>;
    }
}