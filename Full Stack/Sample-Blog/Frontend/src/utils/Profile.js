import Cookies from "js-cookie";

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
const onSelectFile = (event, setPreview) => {
  const file = event.target.files[0];
  if (file) {
    setPreview(URL.createObjectURL(file));
  }
};

const onSubmit = async (data, initialValues) => {
  await delay(2);
  try {
    const token = Cookies.get("jwt");
    const formData = new FormData();

    // Loop through form data and append only changed fields to FormData
    for (const key in data) {
      if (data[key] !== initialValues[key]) {
        if (key === "profile_pic" && data.profile_pic.length > 0) {
          formData.append("DisplayPic", data.profile_pic[0]);
        } else {
          formData.append(key, data[key]);
        }
      }
    }

    const response = await fetch("http://localhost:3000/users", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    } else {
      const result = await response.json();
      console.log(result);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};


export { redirect, onSubmit,onSelectFile};
