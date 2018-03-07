import * as React from 'react'

export const InterceptTextBox = props => {
  let responseText = "{msg:hello}";
  const checkResponseExists = (index) => {
    if(props.ResponseText[index]){
      return props.ResponseText[index]
    }else{
      return responseText
    }
  }
  const checkStatusCode = (index) => {
    let defaultStatusCode = "200"
    if(props.interceptStatus[index]){
      return props.interceptStatus[index]
    }else{
      return defaultStatusCode
    }
  }
  return (
    <div>
      <input
      name="responseText"
      type="text"
      value={ checkResponseExists(props.rowProps.checkbox.requestId)}
      onChange={event => props.handleRespTextChange(event.target.value, props.rowProps.checkbox.requestId)}
    />
        <div>
    <select
      value={checkStatusCode(props.rowProps.checkbox.requestId)}//use props.rowProps._index for index
      onChange={event => {props.handleStatusCodeChange(event.target.value, props.rowProps.checkbox.requestId)}>
      <option value="200">OK</option>
      <option value="404">404</option>
      <option value="500">500</option>
      <option value="300">300 Redirect</option>
    </select>
    </div>

      <button
        value="Intercept"
        onClick={props.handleIntercept.bind(
          this,
          props.rowProps.url,
          props.rowProps.method,
          checkResponseExists(props.rowProps.checkbox.requestId),
          checkStatusCode(props.rowProps.checkbox.requestId)
        )
      }
      >
        Intercept
      </button>
    </div>
  );
};