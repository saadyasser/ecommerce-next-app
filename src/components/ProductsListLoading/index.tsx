import React from "react";
import { Skeleton } from "../ui/skeleton";

export const ProductsListLoading = () => {
  return (
    <div className="sm:mb-0 mb-12 sm:basis-2/3">
      <Skeleton className="w-[103px] h-8 bg-gray-200 sm:mb-8 mb-10" />
      <div className="grid  grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-y-6  pl-1">
        <div>
          <ProductLoading />
        </div>
        <div>
          <ProductLoading />
        </div>
        <div>
          <ProductLoading />
        </div>
        <div>
          <ProductLoading />
        </div>
        <div>
          <ProductLoading />
        </div>
        <div>
          <ProductLoading />
        </div>
      </div>
    </div>
  );
};

export default ProductsListLoading;

const ProductLoading = () => {
  return (
    <>
      <Skeleton className="w-full h-[157px] bg-gray-200 sm:mb-7 mb-10 border-2 border-transparent" />
      <Skeleton className="w-[33px] h-[12px] bg-gray-200 mb-1" />
      <Skeleton className="w-[116px] h-[16px] bg-gray-200 mb-1" />
      <Skeleton className="w-[31px] h-[21px] bg-gray-200" />
    </>
  );
};
