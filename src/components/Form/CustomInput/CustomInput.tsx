import { ChangeEvent, useState } from "react";
import Styles from "./CustomInput.module.scss";
import { FormField, IError, TYPE_INPUT } from "../utilities/interfaces";
import { validatePhoneNumber } from "../../../utilities/functions";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  schema: FormField;
  setSchema: (value: string) => void;
  label?: string;
  hasError: IError;
  required?: boolean;
  type?: TYPE_INPUT;
}

export const CustomInput: React.FC<Props> = ({
  schema,
  setSchema,
  label,
  hasError,
  required,
  type = TYPE_INPUT.PHONE,
  ...props
}) => {
  const { container, error } = Styles;
  const [touched, setTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);

  const validateField = (value: string): boolean => {
    switch (type) {
      case TYPE_INPUT.PHONE:
        return validatePhoneNumber(value);
      default:
        return true;
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();

    setSchema(inputValue);
    setTouched(true);

    const isValidField = validateField(inputValue);

    hasError.status = !isValidField;
    setIsValid(isValidField);
  };

  return (
    <div className={container}>
      <label
        htmlFor={props.name}
        className={
          (required && touched && schema.value?.trim() === "") ||
          (required && touched && !isValid)
            ? error
            : ""
        }
      >
        {label}
      </label>
      <input
        {...props}
        value={schema.value}
        className={
          (required && touched && schema.value?.trim() === "") ||
          (required && touched && !isValid)
            ? error
            : ""
        }
        onChange={handleInputChange}
      />

      {required && touched && schema.value?.trim() === "" && (
        <small>Campo obligatorio</small>
      )}
      {required && touched && !isValid && schema.value?.trim() !== "" && (
        <small>{hasError?.msg}</small>
      )}
    </div>
  );
};
