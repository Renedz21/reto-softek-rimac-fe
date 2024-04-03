
import { CustomInput } from "."
import { Dependent } from "./Dependent/Dependent"
import { Schema, SchemaField, TYPE_INPUT } from "./utilities/interfaces"

interface Props {
  nameForm: string
  schema: Schema
  setSchema: React.Dispatch<React.SetStateAction<Schema>>
}
  
export const FormRender = ({nameForm, schema, setSchema}: Props) => {

  const handleChange = (fieldName: string, value: string) => {
    const updatedSchema = { ...schema };
    const fieldIndex = updatedSchema[nameForm].findIndex((field) => field.name === fieldName);
    
    if (fieldIndex !== -1) {
      updatedSchema[nameForm][fieldIndex].value = value;
    }
    
    setSchema(updatedSchema)
  };
    
  const renderFormField = (field: SchemaField, index: number) => {
      switch (field.type) {
        case TYPE_INPUT.PHONE:
        return (
          <CustomInput
            key={field.name}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            hasError={field.msgError}
            required={field.required}
            type={field.type}
            schema={schema[nameForm][index]}
            setSchema={(value) => handleChange(field.name, value)}
          />
        )
        case TYPE_INPUT.DEPENDENT:
        return (
          <Dependent
            key={field.name}
            label={field.label}
            name={field.name}
            nameForm={nameForm}
            placeholder={field.placeholder}
            hasError={field.msgError}
            required={field.required}
            type={field.type}
            schema={schema[nameForm][index]}
            setSchema={setSchema}
          />
        )
      }
  }

  return <>{schema?.[nameForm]?.map((field, index) => renderFormField(field, index))}</>;
}
