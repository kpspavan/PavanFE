import React,{CSSProperties} from "react";
import Textstyle from "../../styles/textfildstyles.module.css";

interface TextfieldProps
  extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  errorMessage?: string;
  multiline?: boolean;
  styles?:{
    root?:CSSProperties,
    label?:CSSProperties,
    input?:CSSProperties
  }
}

const Input = (props: TextfieldProps) => {
  const { label, multiline, required,styles, errorMessage } = props;
  const labelprops: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: required ? Textstyle.required : "",
    style:styles?.label,
   
  };

  const errorlabel: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: Textstyle["label-error"],
    style:styles?.label

  };

  const InputElement = () => {
    const inputprops: React.InputHTMLAttributes<HTMLInputElement> = {
      type: "text",
      className: `${Textstyle.input} ${
        errorMessage && Textstyle["input-error"]
      }`,

      ...props,
      style:styles?.label
    };
    return (
      <>
        <input
          type="text"
          {...inputprops}
          {...props}
          className={`${Textstyle.input} font-mont bg-light border-2 border-black dark:bg-dark -full`}
        />
      </>
    );
  };

  const TextAreaElement = () => {
    const textareaprops:React.TextareaHTMLAttributes<HTMLTextAreaElement>={
      className:`${Textstyle.textarea} ${errorMessage && Textstyle["input-error"] } `,
      ...props,
      style:styles?.label
    }
    return (
      <>
        <textarea {...textareaprops} ></textarea>
      </>
    );
  };

  return (
    <div className={Textstyle.root} style={styles?.root} >
      {label && <label {...labelprops}>{label}</label>}
      {multiline ? TextAreaElement() : InputElement()}

      {errorMessage && <label {...errorlabel}>{errorMessage}</label>}
    </div>
  );
};

export default Input;
