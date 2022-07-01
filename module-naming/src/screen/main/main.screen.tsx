import { FC } from "react";
import { numberWithCommas } from "../../utils";

type IMainScreenProps = {};

export const MainScreen: FC<IMainScreenProps> = () => {
  return <h5>MainScreen {numberWithCommas(1000)}</h5>;
};
