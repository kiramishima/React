import * as React from 'react';

export interface HelloProps {compiler: string; framework: string;}
// stateless function component
// https://reactjs.org/docs/components-and-props.html#functional-and-class-components
export const Hello = (props: HelloProps) => <h1>Hello {props.compiler} and {props.framework}!</h1>