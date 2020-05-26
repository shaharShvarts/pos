export default (state, action) => {
  let { initialState } = action.payload;
  switch (action.type) {
    case "RESET_TABLE":
      return {
        transactions: initialState.transactions,
      };
    case "FILTER_BY_RECENTLY":
      let { rowCount } = action.payload;
      return {
        transactions: initialState.transactions
          .filter(({ status }) => status !== "failed")
          .slice(0, rowCount),
      };
    case "FILTER_BY_DATE":
      return {
        transactions: initialState.transactions
          .sort((a, b) => (convertDate(a.date) > convertDate(b.date) ? 1 : -1))
          .filter(({ date }) => {
            let dbDate = convertDate(date);
            let { startDate, endDate } = action.payload;
            return (
              dbDate >= new Date(startDate.setHours(0, 0, 0, 0)) &&
              dbDate <= new Date(endDate.setHours(0, 0, 0, 0))
            );
          }),
      };
    case "FILTER_BY_AMOUNT":
      return {
        transactions: initialState.transactions.filter(({ amount }) => {
          let { from, to } = action.payload;
          return amount >= from && amount <= to;
        }),
      };
    case "FILTER_BY_CURRENCY":
      return {
        transactions: initialState.transactions.filter(({ currency }) => {
          let { sign } = action.payload;
          return currency === sign;
        }),
      };
    case "FILTER_BY_EXCHANGE":
      return {
        transactions: initialState.transactions.filter(({ exchange }) => {
          let { from, to } = action.payload;
          return exchange >= from && exchange <= to;
        }),
      };
    case "FILTER_BY_CARD":
      return {
        transactions: initialState.transactions.filter(({ card }) => {
          let { type } = action.payload;
          return card === type;
        }),
      };
    case "FILTER_BY_PAYMENTS":
      return {
        transactions: initialState.transactions.filter(({ payments }) => {
          let { paymentsNum } = action.payload;
          return payments === paymentsNum;
        }),
      };
    case "FILTER_BY_CARD_NUMBER":
      return {
        transactions: initialState.transactions.filter(({ cardNumber }) => {
          let { cardNum } = action.payload;
          return cardNum === cardNumber;
        }),
      };
    case "FILTER_BY_APPROVAL":
      return {
        transactions: initialState.transactions.filter(({ approval }) => {
          let { approvalNum } = action.payload;
          return approval === approvalNum;
        }),
      };
    default:
      return state;
  }
};

const convertDate = (date) => {
  return new Date(
    parseInt(date.split("/")[2], 10),
    parseInt(date.split("/")[1], 10) - 1,
    parseInt(date.split("/")[0], 10)
  );
};
