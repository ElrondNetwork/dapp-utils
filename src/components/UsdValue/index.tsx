import * as React from "react";
import usdValue from "helpers/usdValue";

const UsdValue = (props: {
  amount: string;
  usd: number;
  "data-testid"?: string;
}) => {
  const { amount, usd, ...dataTestId } = props;
  const value = `≈ $${usdValue({ amount, usd })}`;
  return (
    <small className="form-text text-secondary mt-0" {...dataTestId}>
      {`${amount}` === "0" ? "= $0" : value}
    </small>
  );
};

export default UsdValue;
