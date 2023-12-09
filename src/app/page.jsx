"use client";

function page() {
  if (typeof window !== "undefined") {
    window.history.go(-1);
  }

  return;
}

export default page;
