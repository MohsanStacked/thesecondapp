import { Rectangle } from "./Rectangle";
import { charity } from "../data/charity";

export const Acts = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <Rectangle quotes={charity} />
    </div>
  );
};
