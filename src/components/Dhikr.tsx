import { Rectangle } from "./Rectangle";
import { quotes } from "../data/quotes";

export const Dhikr = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <Rectangle quotes={quotes} />
    </div>
  );
};
