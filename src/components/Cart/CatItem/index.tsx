import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CartItemType } from "@/types";
import Image from "next/image";

export const CartItem = ({
  cartItem,
  removeItemFully,
  withRemoveIcon = true,
  withProductIcon = false,
}: {
  cartItem: CartItemType;
  removeItemFully: (CartItemType: CartItemType) => void;
  withRemoveIcon?: boolean;
  withProductIcon?: boolean;
}) => {
  return (
    <>
      <div className={` ${withProductIcon ? "flex gap-3 " : ""}`}>
        {withProductIcon && (
          <Image
            width={60}
            height={60}
            src={cartItem.image.mobile}
            alt={cartItem.name}
            className="w-auto h-auto rounded-md"
          />
        )}
        <div>
          <h4 className="text-sm font-medium">{cartItem.name}</h4>
          <div className="flex gap-2">
            <span className="text-sm font-bold text-red">
              {cartItem.quantity}x
            </span>
            <span className="text-sm  text-gray-300 ">@ ${cartItem.price}</span>
            {withRemoveIcon && (
              <span className="text-sm  text-gray-600">
                ${cartItem.price * cartItem.quantity}
              </span>
            )}
          </div>
        </div>
      </div>
      {withRemoveIcon ? (
        <Dialog>
          <DialogTrigger asChild>
            <Image
              width={20}
              height={20}
              alt={cartItem.name}
              className="cursor-pointer border border-black opacity-15 rounded-full p-1"
              src="/assets/images/icon-remove-item.svg"
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="mb-2">Item Deletion</DialogTitle>
              <DialogDescription className="text-gray-400 text-xs">
                We Hope you enjoyed your food.
              </DialogDescription>
            </DialogHeader>
            <div>Are you sure you want to delete ?</div>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <div className="flex justify-center">
                  <Button
                    className="bg-red text-white  border-0"
                    onClick={() => {
                      removeItemFully(cartItem);
                    }}
                  >
                    Delete
                  </Button>
                  <Button className="bg-white text-black ">Cancle</Button>
                </div>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <span className="text-sm  text-black   ">
          ${cartItem.price * cartItem.quantity}
        </span>
      )}
    </>
  );
};
