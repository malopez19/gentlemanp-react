import { ReactNode } from "react";
import { useGlobalContext } from "../../context/global.context";

interface ButtonProps {
  children: ReactNode;
  parentMethod: () => void;
}
interface ChildrenProps {
  children: React.ReactNode;
}

export const ColorRed = ({children}: ChildrenProps)  => {
  const { value } = useGlobalContext();

  return <div style={{color: 'red'}}>{value}:{children}</div>
}

export default function Button({ children, parentMethod }: ButtonProps) {
  const { setValue } = useGlobalContext();

  const handleclick = () => {
    setValue(10);
    parentMethod();
  };

  return (
    <button className="custon-button" onClick={handleclick}>
      {children}
    </button>
  );
}
