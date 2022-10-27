import { useEffect, useState, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const DonateButton = ({ currency, amount }) => {
  const amountRef = useRef(amount);

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  return (
    <PayPalButtons
      //   forceReRender={[currency, amount]}
      style={{ color: "black", label: "donate" }}
      fundingSource="paypal"
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amountRef.current,
                breakdown: {
                  item_total: {
                    currency_code: currency,
                    value: amountRef.current,
                  },
                },
              },
              items: [
                {
                  name: "Fast 3d Editor",
                  description:
                    "Help the 'fast 3d editor' project with a small amount.",
                  quantity: "1",
                  unit_amount: {
                    currency_code: currency,
                    value: amountRef.current,
                  },
                  category: "DONATION",
                },
              ],
            },
          ],
        });
      }}
    />
  );
};

function DonateForm() {
  const [amount, setAmount] = useState("3.00");
  return (
    <form className="DonateForm">
      <AmountPicker
        onAmountChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <DonateButton currency="EUR" amount={amount} />
    </form>
  );
}

function AmountPicker({ onAmountChange }) {
  return (
    <fieldset onChange={onAmountChange}>
      <legend>Donation Amount</legend>
      <label>
        <input type="radio" value="3.00" defaultChecked="true" name="amount" />
        3.00
      </label>
      <label>
        <input type="radio" value="5.00" name="amount" id="radio-6" />
        5.00
      </label>
      <label>
        <input type="radio" value="10.00" name="amount" id="radio-9" />
        10.00
      </label>
    </fieldset>
  );
}

console.log();

export function DonateApp() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PP_CLIENT_ID,
        components: "buttons",
        currency: "EUR",
      }}
    >
      {/*Infos and img */}
      <DonateForm />
    </PayPalScriptProvider>
  );
}
