import { Fragment } from "react";
import { PlateMark } from "./PlateMark";
const messages = [
  "LEZZETLE BULUŞALIM",
  "BİRLİKTE PAYLAŞALIM",
  "ÖZENLE HAZIRLAYALIM",
];
export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div>
        {[...messages, ...messages].map((message, index) => (
          <Fragment key={index}>
            {message}
            <PlateMark />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
