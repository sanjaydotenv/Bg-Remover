# RemoveBG

A simple AI-powered background remover built with React and Tailwind CSS.

## 🚀 Features

* Upload images from your device
* Remove image backgrounds using Remove.bg API
* Preview the processed image
* Download the background-removed image
* Loading state while processing
* Clean and responsive UI

## 🛠️ Tech Stack

* React
* Tailwind CSS
* JavaScript
* Remove.bg API

## 📁 Project Structure

```text
src/
├── Components/
│   └── BgRemoverUi.jsx
├── uploadImage.js
├── App.jsx
└── main.jsx
```

## ⚙️ How It Works

1. User selects an image.
2. The image is received as a `File` object.
3. The file is added to `FormData`.
4. The image is sent to the Remove.bg API.
5. The API returns the processed PNG image.
6. A Blob URL is created for the result.
7. React displays the processed image.
8. User can download the final image.

## 🔑 API Key

This project uses the Remove.bg API.

For production, never expose your API key inside the React frontend.
Use a backend server and store the API key in an environment variable.

## 📌 Note

This project is created for learning and practice purposes.
The background removal functionality is powered by the Remove.bg API.


Live Link :- https://bg-remover-three-beta.vercel.app/