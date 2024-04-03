import Styles from "./Summary.module.scss";

import { Card } from "../../../../../components";
import { IPlan } from "../../../../../models/data";
import { useAuthStore } from "../../../../../store/use-auth";

interface Props {
  planSelected: IPlan[];
}

export const Summary = ({ planSelected }: Props) => {
  const { container } = Styles;
  const { name, lastName } = useAuthStore();

  return (
    <div className={container}>
      <h3>Resumen del seguro </h3>
      <Card>
        <p>Precios calculados para:</p>
        <h5>
          <img src="/assets/icons/User.svg" alt="Icono usuario" />
          {name} {lastName}
        </h5>

        <ul>
          <li>
            <strong>Responsable de pago</strong>
          </li>
          <li>DNI: 444888888</li>
          <li>Celular: 5130216147</li>
        </ul>

        <ul>
          <li>
            <strong>Plan elegido</strong>
          </li>
          <li>{planSelected[0].name}</li>
          <li>Costo del Plan: S/ {planSelected[0].price} al mes</li>
        </ul>
      </Card>
    </div>
  );
};
