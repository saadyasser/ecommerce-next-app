import Image from "next/image";
import React from "react";

const EmptyCart = () => {
  return (
    <>
      <Image
        width={10}
        height={10}
        alt=" = kkkk"
        className="w-[70%] mx-auto"
        src="/assets/images/illustration-empty-cart.svg"
      />
      <p className="text-sm text-center text-red">
        Your added items will appear here.
      </p>
    </>
  );
};

export default EmptyCart;
