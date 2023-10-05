import { useRouter } from "next/router";
import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  // cách lấy slug từ URl
  const  router =useRouter()
  console.log("🚀 ~ file: page.tsx:7 ~ Page ~ router:", router)
  return (
    <>
      slug property
      <div>My Post: {params.slug}</div>
    </>
  );
};

export default Page;
