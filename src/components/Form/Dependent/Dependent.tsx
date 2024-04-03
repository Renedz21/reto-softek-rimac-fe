import React, { useState } from "react";
import {
  FormField,
  IError,
  IOption,
  Schema,
  TYPE_INPUT,
} from "../utilities/interfaces";
import Styles from "./Dependent.module.scss";
import { DOCUMENTS } from "../../../utilities/constants";
import {
  validateCarnetExtranjeria,
  validateDocumentDNI,
} from "../../../utilities/functions";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  nameForm: string;
  schema: FormField;
  setSchema: React.Dispatch<React.SetStateAction<Schema>>;
  label?: string;
  hasError: IError;
  required?: boolean;
  type?: TYPE_INPUT;
}

export const Dependent: React.FC<Props> = ({
  schema,
  setSchema,
  nameForm,
  name,
}) => {
  const { container, containerSelect, containerInput, error } = Styles;
  const [touched, setTouched] = useState<boolean>(false);

  if (!schema || !schema.input || !schema.select) return <></>;

  const validateField = (value: string): boolean => {
    if (schema && schema.select) {
      switch (schema.select.value) {
        case DOCUMENTS.DNI:
          return validateDocumentDNI(value);
        case DOCUMENTS.CARNET_EXTRANJERIA:
          return validateCarnetExtranjeria(value);
        default:
          return true;
      }
    }

    return false;
  };

  const handleOptionClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedInputValue = e.target.value;
    setTouched(true);
    console.log("ASDASDAS", updatedInputValue);

    setSchema((prev: any) => {
      if (!prev || !prev[nameForm]) return {};

      const updatedFormFields = prev[nameForm].map((field: any) => {
        if (field.select && field.name === name) {
          return {
            ...field,
            select: {
              ...field.select,
              msgError: {
                status: true,
              },
              value: updatedInputValue,
            },
          };
        }

        return field;
      });

      return {
        ...prev,
        [nameForm]: updatedFormFields,
      };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedInputValue = e.target.value;
    setTouched(true);

    setSchema((prev: any) => {
      if (!prev || !prev[nameForm]) return {};

      const updatedFormFields = prev[nameForm].map((field: any) => {
        if (field.input && field.name === name) {
          return {
            ...field,
            input: {
              ...field.input,
              msgError: {
                ...field.input.msgError,
                status: validateField(updatedInputValue.toUpperCase())
                  ? true
                  : false,
              },
              value: updatedInputValue,
            },
          };
        }

        return field;
      });

      return {
        ...prev,
        [nameForm]: updatedFormFields,
      };
    });
  };

  return (
    <div
      className={`${container} ${
        (schema?.input?.required &&
          touched &&
          schema?.input.value?.trim() === "") ||
        (schema?.input?.required && touched && !schema?.input.msgError.status)
          ? error
          : ""
      }`}
    >
      <div className={containerSelect}>
        <select
          defaultValue={schema.value}
          onChange={(e: any) => handleOptionClick(e)}
        >
          {schema?.select?.options?.map((option: IOption) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className={containerInput}>
        <label htmlFor={schema.input.name}>{schema.input.label}</label>
        <input
          value={schema.input.value}
          placeholder={schema.input.placeholder}
          onChange={handleInputChange}
        />
      </div>
      {schema.input.required &&
        touched &&
        schema?.input.value?.trim() === "" && <small>Campo obligatorio</small>}
      {schema?.input?.required &&
        touched &&
        !schema?.input.msgError.status &&
        schema?.input.value?.trim() !== "" && (
          <small>{schema?.input?.msgError?.msg}</small>
        )}
    </div>
  );
};
