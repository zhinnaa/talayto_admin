import React from 'react'
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";

export default function ProgressBar() {
  return (
    <ProgressBarComponent id="circular-container" type="Circular" height="160px" value={100} animation={{
        enable: true,
        duration: 2000,
        delay: 0
    }}>
      </ProgressBarComponent>);
  
}
