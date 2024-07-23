import { MdAddChart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";

const Header = () => {

    const dispatch = useDispatch();


  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white py-3 px-4">
      <div className="text-3xl ">React Uygulama</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
           <select className="h-10 rounded-lg" name="" id="" >
            <option value="asc">ARTAN</option>
            <option  value="desc">AZALAN</option>
            </select> 
        </div>
        <div>
            <input className="h-10 rounded-lg px-4 text-black" type="text" placeholder='Arama yapınız...'/>
        </div>
        <div onClick={()=> dispatch(modalFunc())} className="bg-indigo-800 rounded-full justify-center items-center flex cursor-pointer w-10 h-10">
        <MdAddChart size={24}/>
        </div>
      </div>

    </div>
  )
}

export default Header;
