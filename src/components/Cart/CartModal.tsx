import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { removeItem, updateQuantity } from "../../redux/slices/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { translate } from "../../i18n.tsx";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartSys: CartItem[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart?.items || []);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Cart Items Updated: ", cartItems);
  }, [cartItems]);

  const handleIncreaseQuantity = (id: number) => {
    const item = cartItems.find((item: { id: number }) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (id: number) => {
    const item = cartItems.find((item: { id: number }) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{translate("cart")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {cartItems.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {translate("item")}
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {translate("quantity")}
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {translate("price")}
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            onClick={() => handleDecreaseQuantity(item.id)}
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            size="sm"
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        <RiDeleteBin6Line
                          color="red"
                          onClick={() => handleRemoveItem(item.id)}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>{translate("noItems")}</p>
          )}
          <div className="flex justify-between font-bold mt-4">
            <span>{translate("total")}</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={onClose}
            colorScheme="blue"
            variant="outline"
            className="w-full"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
