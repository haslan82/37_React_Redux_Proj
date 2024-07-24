import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

const Modal = ({ title, content }) => {
  const dispatch = useDispatch();
    return (
      <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-screen grid place-items-center">
        <div className="w-1/3 shadow-lg rounded-md p-4 bg-white ">
          <div className="border-b py-3 flex justify-between items-center">
            <div className="text-2xl">{title}</div>
            <IoClose
              onClick={() => dispatch(modalFunc())}
              className="cursor-pointer text-[24px] hover:scale-[1.1]"
            />
          </div>
          <div>{content}</div>
        </div>
      </div>
    );
  };
  
  export default Modal;
