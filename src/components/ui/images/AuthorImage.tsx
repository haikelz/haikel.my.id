"use client";

import { block } from "million/react";
import Image from "next/image";
import { useState } from "react";
import { cxm } from "~lib/helpers";

const AuthorImage = block(function AuthorImage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Image
      className={cxm("mr-2 rounded-full duration-700", isLoading ? "blur-md" : "blur-none")}
      onLoadingComplete={() => setIsLoading(false)}
      decoding="async"
      src="https://avatars.githubusercontent.com/u/77146709?v=4"
      alt="avatar"
      width={25}
      height={25}
      loading="lazy"
      draggable={false}
    />
  );
});

export default AuthorImage;
