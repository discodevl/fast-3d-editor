import { useEffect, useRef, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const DonateButton = ({ currency, amount }) => {
  const [successMsg, setSuccessMsg] = useState("");
  const amountRef = useRef(amount);

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);
  async function handleApprove(data, actions) {
    const capture = await actions.order.capture();
    if (capture.payer.name.given_name) {
      setSuccessMsg(
        `Thanks ${capture.payer.name.given_name}! Your donation has been made`
      );
    }
  }

  return (
    <>
      {successMsg ? (
        <span>{successMsg}</span>
      ) : (
        <PayPalButtons
          style={{
            layout: "horizontal",
            color: "blue",
            shape: "pill",
            label: "pay",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: currency, // Specify the currency
                    value: amountRef.current, // Specify the amount
                  },
                },
              ],
            });
          }}
          onApprove={handleApprove}
          onError={(err) => {
            console.error("PayPal Checkout Error", err);
          }}
        />
      )}
    </>
  );
};

function DonateForm() {
  const initialAmount = "0.10";
  const [amount, setAmount] = useState(initialAmount);
  return (
    <form className="DonateForm">
      <AmountPicker
        initialAmount={initialAmount}
        onAmountChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <DonateButton currency="EUR" amount={amount} />
    </form>
  );
}

function AmountPicker({ onAmountChange, initialAmount }) {
  return (
    <fieldset onChange={onAmountChange}>
      <legend>Donation Amount</legend>
      <label>
        <input
          type="radio"
          value={initialAmount}
          defaultChecked="true"
          name="amount"
        />
        0.10
      </label>
      <label>
        <input type="radio" value="4.00" name="amount" id="radio-6" />
        4.00
      </label>
      <label>
        <input type="radio" value="8.00" name="amount" id="radio-9" />
        8.00
      </label>
    </fieldset>
  );
}

export function Donate() {
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
