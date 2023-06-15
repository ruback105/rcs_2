// function getContext() {
//   console.log(this);
// }

// const arrowGetContext = () => {
//   console.log(this);
// };

// getContext();
// arrowGetContext();

// const user = {
//   name: "Artūrs",
//   getFunctionName: function () {
//     console.log(this);
//   },
//   getArrowName: () => {
//     console.log(this);
//   },
// };

// user.getFunctionName();
// user.getArrowName();

const mobilePhone = {
  price: 999,
  currency: "$",
  getFullValue: function () {
    const { price, currency } = this;
    return `${currency}${price}`;
  },
};

const fullPrice = mobilePhone.getFullValue();
console.log(fullPrice);
