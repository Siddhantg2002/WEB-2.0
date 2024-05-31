const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  export const onSubmit = async (data, setErrorMessage, setSuccessMessage) => {
    await delay(3);
    try {
      const response = await fetch("http://localhost:3000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      } else {
        setSuccessMessage("Account created successfully");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setErrorMessage(error.message);
    }
  };
  export default {onSubmit}