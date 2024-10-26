import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { ImgbbResponse } from "~/types/responses/imgbb";

const usePostImgbb = () => {
  return useMutation({
    mutationFn: ({
      name = "venting-hearbreak",
      image,
    }: {
      name?: string;
      image: File;
    }) => {
      const formData = new FormData();

      formData.append("image", image);
      formData.append("name", name);

      return axios.post<ImgbbResponse>(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: { key: process.env.NEXT_PUBLIC_IMGBB_KEY },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
  });
};

export default usePostImgbb;
