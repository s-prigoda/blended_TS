function convertCurrency({
  amount,
  currency,
}: {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 100, currency: "UAH" });
