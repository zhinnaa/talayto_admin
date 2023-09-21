import React from 'react';
import { Calendar } from "@react-shamsi/calendar";
import "@react-shamsi/calendar/dist/styles.css";
import styled from 'styled-components';
import '../App.css'
// Create a custom styled component for the Calendar
const StyledCalendar = styled(Calendar)`
width: 700px;

`;
export default function Example() {
  return (
    // Use your custom styled component instead of the plain Calendar component
    <div>
    {/* Calendar component */}
    <Calendar />

    {/* Add custom styles to a specific element using a CSS class */}
    <div className="max-w-[22rem]">
    
    </div>
  </div>

  );
}