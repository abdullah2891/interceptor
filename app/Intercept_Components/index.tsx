import * as React from 'react'
import { InterceptTextBox } from './InterceptTextBox';

export const InterceptForm = (props) => {
  return(
    <div>
    <InterceptTextBox rowProps={props.rowProps.row} handleIntercept={props.handleIntercept} handleRespTextChange={props.handleRespTextChange} ResponseText={props.ResponseText} handleStatusCodeChange={props.handleStatusCodeChange} interceptStatus={props.interceptStatus}/>
    </div>
  )
}