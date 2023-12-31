
import React, { useContext } from "react";
import { ThemeContext } from "./context/theme-context";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const theme = useContext(ThemeContext);
  const buttonStyles = {  
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor 
  }
  const inputStyles = { 
    backgroundColor: theme.inputBackground,
    color: theme.textColor, 
  }
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <label>Pair Names:
          <br/>
          {/* We add input styles. */}
          <input
            style={inputStyles}
            type='text'
            name='names' />
        </label>
        <br/>
        <label>Location:
          <br/>
          {/* We add input styles. */}
          <input
            style={inputStyles}
            type='text'
            name='location' />
        </label>
        <br/>
        <label>Describe your issue:
          <br/>
          <textarea
            style={inputStyles}
            name='issue' />
        </label>
        <br/> 
        <button style={buttonStyles}  type='submit'>{props.buttonText}</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;