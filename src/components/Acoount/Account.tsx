import React, { useState } from "react";
import { translate } from "../../i18n";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logInAction } from "../../redux/slices/accountSlice";
import { useToast } from "@chakra-ui/react";

interface AccountProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const Account: React.FC<AccountProps> = ({ isModalOpen, toggleModal }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const toast = useToast();

  const authenticateUser = async (email: string, password: string) => {
    try {
      const response = await fetch("../../../db.json");
      const data = await response.json();
      const user = data.user.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password
      );
      return user;
    } catch (error) {
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await authenticateUser(email, password);

    if (user) {
      console.log("Аутентификация прошла успешно", user);
      dispatch(
        logInAction({
          email: user.email,
        })
      );
      toast({
        title: "Login successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      toggleModal();
    } else {
      toast({
        title: "Email or password is incorrect",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">{translate("login")}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  {translate("email")}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder={translate("email")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  {translate("password")}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder={translate("password")}
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
              >
                {translate("login_button")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
