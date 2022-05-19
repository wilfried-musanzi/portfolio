import "../css/main.scss";

const promise = async function (number) {
  return new Promise((resolve, reject) => {
    if (number > 5) resolve("Yes great number !");
  });
};

const consume = async function () {
  const eat = await promise(6);
  console.log(eat);
};

consume();
