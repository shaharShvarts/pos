export const columns = [
  {
    id: "date",
    label: "תאריך",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleDateString("he-IL"),
  },
  {
    id: "amount",
    label: "סכום",
    minWidth: 100,
    align: "center",
    format: (value) =>
      value.toLocaleString("he-IL", { minimumFractionDigits: 2 }),
    // format: (value) =>
    //   new Intl.NumberFormat("he", {
    //     style: "currency",
    //     currency: "ILS",
    //   }).format(value),
  },
  {
    id: "currency",
    label: "מטבע",
    minWidth: 170,
    align: "center",
  },
  {
    id: "commissions",
    label: "עמלות",
    minWidth: 170,
    align: "center",
    format: (value) =>
      value.toLocaleString("he-IL", { minimumFractionDigits: 2 }),
  },
  {
    id: "exchange",
    label: "תמורה",
    minWidth: 170,
    align: "center",
    format: (value) =>
      value.toLocaleString("he-IL", { minimumFractionDigits: 2 }),
  },
  {
    id: "card",
    label: "כרטיס",
    minWidth: 170,
    align: "center",
  },
  {
    id: "payments",
    label: "תשלומים",
    minWidth: 170,
    align: "center",
  },
  {
    id: "cardNumber",
    label: "מספר כרטיס",
    minWidth: 170,
    align: "center",
    format: (value) => value + "*".repeat(8),
  },
  {
    id: "approval",
    label: "מספר אישור",
    minWidth: 170,
    align: "center",
  },
];
