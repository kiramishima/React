import * as React from "react";
import { Button } from 'antd';

export interface SampleProps {
  compiler: string;
}

export class Sample extends React.Component<SampleProps, {}> {
  render() {
    return (<div>
      <h1>This is {this.props.compiler} + antd-mobile demo!</h1>
      <Button size="small" type="primary">Start</Button>
    </div>);
  }
}