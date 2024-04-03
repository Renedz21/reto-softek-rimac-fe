import { TYPE_INPUT } from "../components/Form/utilities/interfaces";

export const TYPE_DOCUMENTS = [
  { value: "DNI", label: "DNI" },
  { value: "C. E.", label: "C. E." },
];

export const DOCUMENTS = {
  DNI: "DNI",
  CARNET_EXTRANJERIA: "C. E.",
};

export const TYPE_OPTION = {
  FOR_ME: "for_me",
  FOR_YOU: "for_you",
};

export const DEVICE = {
  MOBILE: 600,
};

export const DISCOUNT_AMOUNT = 0.05;

export const SCHEME_LOGIN: { login: any[] } = {
  login: [
    {
      id: 1,
      type: TYPE_INPUT.DEPENDENT,
      name: "dependent",
      placeholder: "Ingrese sus datos",
      required: true,
      value: "",
      select: {
        type: TYPE_INPUT.SELECT,
        name: "type_document",
        label: "Tipo de documento",
        placeholder: "Seleccione una opción",
        options: TYPE_DOCUMENTS,
        value: "DNI",
        required: true,
        msgError: {
          msg: "Seleccione una opción",
          status: true,
        },
      },
      input: {
        type: TYPE_INPUT.TEXT,
        name: "document",
        label: "Nro. de documento",
        placeholder: "Ingrese sus datos",
        required: true,
        value: "",
        msgError: {
          msg: "Ingrese un documento válido",
          status: true,
        },
      },
    },
    {
      id: 2,
      type: TYPE_INPUT.PHONE,
      name: "phone",
      label: "Celular",
      placeholder: "Ingrese sus datos",
      required: true,
      value: "",
      msgError: {
        msg: "Ingrese un celular válido",
        status: true,
      },
    },
  ],
};
