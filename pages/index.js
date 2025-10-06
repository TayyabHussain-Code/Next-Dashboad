import Image from "next/image";
import Rblogo from "../public/assests/Rblogo.png";
import Rbimage from "../public/assests/Group.svg";
import { useState } from "react";
import { HandleLogin } from "@/DAL/Auth/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice";
export default function Login() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({});
  const router = useRouter();
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [formData, setformData] = useState({ username: "", userPassword: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: formData.username,
      password: formData.userPassword,
    };

    const resp = await HandleLogin(payload);
    console.log(resp, "resppsadasdapp");
    if (resp.status === 200 || resp.status === 201) {
      toast.success(resp?.message || "Login successful!");
      router.push(`/home`);
      dispatch(login({ token: resp?.accessToken, user: resp?.user }));
    } else if (resp?.code === 401) {
      toast.error(resp?.message || "Login failed");
    } else if (resp?.accessToken !== "") {
      toast.success(resp?.message || "Login Successfull");
      dispatch(login({ token: resp?.accessToken, user: resp?.user }));
      router.push(`/home`);
    } else {
      toast.error(resp?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <Image src={Rblogo} alt="rocologo" className="logo" />
        <div className="items-center justify-center">
          <p className="font-semibold mt-8 text-[32px]">Welcome to RB Live</p>
        </div>
        <div className="w-80">
          <form>
            <div className="mt-8">
              <p>Email</p>
              <input
                id="username"
                type="eamil"
                name="username"
                placeholder="Enter your email address"
                onChange={handleChange}
                required
                className="min-w-80 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-2">
              <p>Password</p>
              <input
                id="userPassword"
                type="password"
                name="userPassword"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                className="min-w-80 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="min-w-80 mt-4 btn-log"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center login-right-area">
        <Image src={Rbimage} alt="image" />
      </div>
    </div>
  );
}
