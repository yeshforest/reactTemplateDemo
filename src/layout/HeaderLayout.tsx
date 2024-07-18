import { FC } from "react";

interface Props {
  children?: React.ReactNode;
}


const HeaderLayout: FC<Props> = () => {
  return(
    <header>[header section]</header>
  );
};
export default HeaderLayout;