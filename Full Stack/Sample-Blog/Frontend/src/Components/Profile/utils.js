const delay = (d) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, d * 1000);
  });
};

const redirect = async (navigate, isSubmitSuccessful) => {
    if (isSubmitSuccessful) {
      await delay(1);
      navigate("/account/home");
    }
  };


export {redirect, delay}