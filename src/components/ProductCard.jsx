import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../../src/redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  const updateFunc = () => {
    dispatch(modalFunc());
    setIsEdit(!isEdit);
    navigate(`/?update=${dt?.id}`);
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md  ">
      {/*  // ! object cover nasıl yerleştiririm */}
      <img className="w-full h-full  rounded-md  "
       src={dt?.url} alt="" />
      <div className="absolute left-0 bottom-0 bg-blue-300 text-white-full px-2 ">
        <div className="text-lg font-semibold ">{dt?.name} </div>
        <div>{dt?.price}€</div>
      </div>
      <div className="text-white absolute top-0 right-0 m-2 w-5 h-5 bg-blue-300 transition
       hover:bg-blue-500 cursor-pointer rounded-full grid place-items-center ">
        <BsThreeDots onClick={() => setIsEdit(!isEdit)} />
      </div>
      {isEdit && (
        <div className="absolute text-white bg-zinc-800 top-8 right-2 rounded-md p-1 shadow-md shadow-white ">
          <div
            onClick={() => dispatch(deleteDataFunc(dt.id))}
            className="hover:bg-red-400 p-[2px] px-2 rounded-md cursor-pointer transition border"
          >
            Sil
          </div>
     
          <div
            onClick={updateFunc}
            className="hover:bg-green-400 p-[2px] px-2  rounded-md cursor-pointer transition border mt-1"
          >
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

