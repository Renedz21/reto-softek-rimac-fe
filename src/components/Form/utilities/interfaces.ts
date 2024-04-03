export enum TYPE_INPUT {
  PHONE     = "phone",
  DEPENDENT = "dependent",
  SELECT    = 'select',
  TEXT      = 'text',
}

export type FieldType = typeof TYPE_INPUT[keyof typeof TYPE_INPUT];

export interface IOption {
  value: string
  label: string
}

export interface FormField {
  id: number;
  type: FieldType;
  name: string;
  label?: string;
  placeholder: string;
  required: boolean;
  value: string;
  options?: IOption[];
  input?: {
    type: FieldType;
    name: string;
    label: string;
    placeholder: string;
    required: boolean;
    value?: string;
    msgError: {
      msg: string
      status: true,
    },
  },
  select?: {
    type: TYPE_INPUT.SELECT,
    name: string,
    label: string,
    placeholder: string
    options: IOption[];
    value: '',
    required: true,
    msgError: {
      msg: string
      status: true,
    },
  },
  msgError: {
    msg: string;
    status: boolean;
  }
}

export interface SchemaField extends FormField {
  msgError: {
    msg: string;
    status: boolean;
  };
}
  
export interface Schema {
  [formName: string]: SchemaField[];
}

export interface IError {
  msg: string
  status: boolean
}