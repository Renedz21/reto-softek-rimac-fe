import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Styles from "./FormLogin.module.scss";

import { HOME } from "../../../../../data/home";
import { SCHEME_LOGIN } from "../../../../../utilities/constants";
import { FormField } from "../../../../../components/Form/utilities/interfaces";

import { FormRender } from "../../../../../components/Form";
import InputCheckbox from "../../../../../components/Form/InputCheckbox/InputCheckbox";
import { PrimaryButton } from "../../../../../components";
import { ROUTES } from "../../../../../utilities/routes";
import { useFetchAndLoad } from "../../../../../hooks/useFetchAndLoad";
import { getUser } from "../../../../../services/user/user.service";
import { useAuthStore } from "../../../../../store/use-auth";

export const FormLogin = () => {
  const { container, containerTerms } = Styles;

  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const { callEndpoint } = useFetchAndLoad();

  const [schema, setSchema] =
    useState<Record<string, FormField[]>>(SCHEME_LOGIN);
  const [processing, setProcessing] = useState(false);

  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      getUserData();
      navigate(ROUTES.PRIVATE.PLANS);
    }, 3000);
  };

  const getUserData = async () => {
    try {
      const response = await callEndpoint(getUser());
      if (response.success && response.data) {
        const userData = response.data;
        // dispatch(setUser(userData));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setUser(userData as any);
      } else {
        console.error("Error fetching user data:");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const isValid = schema.login
    ?.filter((field) => field.required)
    .some((field) => field.msgError?.status);

  const handleTermsChange = () => {};

  return (
    <form action="" className={container}>
      <p>{HOME.SUB_TITLE}</p>
      <FormRender nameForm="login" schema={schema} setSchema={setSchema} />

      <div className={containerTerms}>
        <InputCheckbox onChange={handleTermsChange}>
          Acepto la Política de Privacidad
        </InputCheckbox>

        <InputCheckbox onChange={handleTermsChange}>
          Acepto la Política Comunicaciones Comerciales
        </InputCheckbox>
      </div>

      <Link to={HOME.TERMS.ROUTE}>{HOME.TERMS.TEXT}</Link>

      <PrimaryButton
        text="Cotiza aquí"
        isLoader={processing}
        disabled={processing || isValid}
        onClick={handleLoginClick}
      />
    </form>
  );
};
