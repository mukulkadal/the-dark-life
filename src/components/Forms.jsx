import { useForm } from 'react-hook-form';
import './style.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const URL = 'https://api.escuelajs.co/api/v1/auth/login';
const Forms = () => {
    const navigate = useNavigate()
  const {register,handleSubmit,formState: { errors },} = useForm();

  const onSubmit = async (formdata) => {
try {
     await axios.post(URL,formdata).then((res) =>{
        localStorage.setItem("access_token", res.data.access_token)
        localStorage.setItem("refresh_token", res.data.refresh_token)
        toast.success("Login Successfull")
     })
navigate("/navigation")
} catch (error) {
    console.log(error);
    toast.error("Login in Field")
}
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-black w-96 h-96 px-6 py-5 rounded-md">
          <h2 className="text-center text-[30px] text-white font-semibold">
            The Dark Life
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-10 mt-5 relative">
              <input
                {...register('email', { required: 'Email is required' })}
                type="email"
                placeholder="Email or Phone Number"
                className="w-full py-3 px-3 rounded-sm outline-none"
              />
              {errors.email && (
                <p className="text-red-400 absolute top-[55px]">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                {...register('password', { required: 'Password is required' })}
                type="password"
                placeholder="Password"
                className="w-full py-3 px-3 rounded-sm outline-none"
              />
              {errors.password && (
                <p className="text-red-400 absolute top-[57px]">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#af2727db] px-20 py-2 mt-10 text-white hover:bg-[#0f5E61] rounded-full font-medium"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forms;







// import { useForm } from 'react-hook-form';
// import './style.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// const URL = 'https://api.escuelajs.co/api/v1/auth/login';
// const Forms = () => {
//   const {register,handleSubmit,formState: { errors },} = useForm();

//   const onSubmit = async (data) => {
// try {
//  await axios.post(URL,data).then((res)=>{

//     if (res.status === 201) {
//        localStorage.setItem("access_token", res.data.access_token) 
//        localStorage.setItem("refresh_token", res.data.refresh_token) 
//        toast.success("Login Succesfull")
//     }
//  })
// } catch (error) {
//     console.log(error);
//     toast.error("Login Feild")
// }
//   };

//   return (
//     <>
//       <div className="w-full h-screen flex justify-center items-center">
//         <div className="bg-black w-96 h-96 px-6 py-5 rounded-md">
//           <h2 className="text-center text-[30px] text-white font-semibold">
//             The Dark Life
//           </h2>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-10 mt-5 relative">
//               <input
//                 {...register('email', { required: 'Email is required' })}
//                 type="email"
//                 placeholder="Email or Phone Number"
//                 className="w-full py-3 px-3 rounded-sm outline-none"
//               />
//               {errors.email && (
//                 <p className="text-red-400 absolute top-[55px]">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//             <div className="relative">
//               <input
//                 {...register('password', { required: 'Password is required' })}
//                 type="password"
//                 placeholder="Password"
//                 className="w-full py-3 px-3 rounded-sm outline-none"
//               />
//               {errors.password && (
//                 <p className="text-red-400 absolute top-[57px]">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-[#af2727db] px-20 py-2 mt-10 text-white hover:bg-[#0f5E61] rounded-full font-medium"
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Forms;

