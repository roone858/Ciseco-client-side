/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import { ChangeImageIcon } from "../../icons";
import Avatar from "../../../assets/user-avatar.png";
import axios from "axios";

export const InputImage = ({ setSelectedImage, image }: any) => {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setImagePreview(null);
    }
  };
  useEffect(() => {
    (async () => {
      if (image) {
        try {
          const response = await axios.get(
            "http://localhost:3000/users/profile-picture/" + image,
            { responseType: "arraybuffer" }
          );
          const base64Image = arrayBufferToBase64(response.data);
          setImagePreview(`data:image/jpeg;base64,${base64Image}`);
        } catch (error: any) {
          console.error("Error fetching image:", error.message);
        }
      }
    })();
  }, [image]);
  const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };
  return (
    <div className="relative rounded-full overflow-hidden flex">
      <img
        alt="avatar"
        width="128"
        height="128"
        className="w-32 h-32 rounded-full object-cover z-0"
        src={
          imagePreview
            ? imagePreview.toString()
            : image
            ? "http://localhost:3000/users/profile-picture/" + image
            : Avatar
        }
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
        <ChangeImageIcon />
        <span className="mt-1 text-xs">Change Image</span>
      </div>
      <input
        onChange={handleImageChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
        type="file"
      />
    </div>
  );
};
