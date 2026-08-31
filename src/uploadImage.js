export const uploadImage = (inpRef) => {
  inpRef.current.click();
};

export const hangleChange = async (file, setImageUrl) => {
  const image = file.target.files[0];

  if (!image) return;

  try {
    const result = await removeBg(image);
    console.log(result);

    if (result) {
      setImageUrl(result);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

const removeBg = async (file) => {
  const formData = new FormData();

  formData.append("size", "auto");
  formData.append("image_file", file);

  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": `${import.meta.env.VITE_API_KEY}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();

    console.log("Remove.bg Error:", errorData);

    throw new Error(errorData.errors?.[0]?.title || "Something went wrong");
  }

  const imageBlob = await response.blob();

  const imageUrl = URL.createObjectURL(imageBlob);

  return imageUrl;
};
