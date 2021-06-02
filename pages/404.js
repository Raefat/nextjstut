import React from "react";

import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <div>
      <h1>Page Does Not Exist</h1>
    </div>
  );
}

export default NotFound;
