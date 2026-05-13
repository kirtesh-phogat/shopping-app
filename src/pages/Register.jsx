// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//     reset
//   } = useForm();

//   const formSubmitHandler = (formData) => {
//     console.log("form Submitted :", formData);
//     toast.success("form submitted!");
//     reset();
//   };

//   console.log(watch("email"));

//   return (
//     <div className="w-full max-w-sm mx-auto my-12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//       <form className="space-y-6" onSubmit={handleSubmit(formSubmitHandler)}>
//         <h5 className="text-xl font-medium text-gray-900 dark:text-white">
//           Sign Up to our platform
//         </h5>
//         <div>
//           <label
//             htmlFor="name"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your Full Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             {...register("name", {
//               required: "name is required!",
//               minLength: {
//                 value: 2,
//                 message: "name must be lengthen 2 or more characters",
//               },
//               pattern: {
//                 value: /^[A-Za-z ]{2,30}$/,
//                 message: "only alphabets are allowed",
//               },
//             })}
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//             placeholder="John Doe"
//           />
//           {errors.name && (
//             <span className="text-red-500">{errors.name.message}</span>
//           )}
//         </div>
//         <div>
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             {...register("email", { required: "email is required!" })}
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//             placeholder="name@company.com"
//             required=""
//           />
//           {errors.email && (
//             <span className="text-red-500">{errors.email.message}</span>
//           )}
//         </div>
//         <div>
//           <label
//             htmlFor="password"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your password
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="••••••••"
//             {...register("password", { required: "password is required!" })}
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//           />
//           {errors.password && (
//             <span className="text-red-500">{errors.password.message}</span>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Register to your account
//         </button>
//         <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//           Already Have account ?{" "}
//           <a
//             href="#"
//             className="text-blue-700 hover:underline dark:text-blue-500"
//           >
//             Login
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

const registerSchema = z.object({
  name: z
    .string()
    .min(2, "name must be lengthen 2 or more characters")
    .regex(/^[A-Za-z ]+$/, "only alphabets are allowed"),

  email: z.email(),

  password: z.string().min(6, "password must be at least 6 characters"),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  // const formSubmitHandler = (formData) => {
  //   console.log("form Submitted :", formData);
  //   toast.success("form submitted!");
  //   reset();
  //   const userData = JSON.parse(localStorage.getItem("userData")) || [];
  //   localStorage.setItem("userData", JSON.stringify([...userData, formData]));
  //   navigate("/login");
  // };

  const formSubmitHandler = (formData) => {
  const userWithImage = {
    ...formData,
    image: `https://i.pravatar.cc/150?u=${formData.email}`,
  };

  const userData = JSON.parse(localStorage.getItem("userData")) || [];

  localStorage.setItem(
    "userData",
    JSON.stringify([...userData, userWithImage])
  );

  toast.success("Registered Successfully!");
  reset();
  navigate("/login");
  };

  console.log(watch("email"));

  return (
    <div className="w-full max-w-sm mx-auto my-12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(formSubmitHandler)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign Up to our platform
        </h5>

        {/* NAME */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Full Name
          </label>

          <input
            type="text"
            {...register("name")}
            placeholder="John Doe"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>

          <input
            type="text"
            {...register("email")}
            placeholder="name@company.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />

          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>

          <input
            type="password"
            {...register("password")}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />

          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
        >
          Register to your account
        </button>
      </form>
    </div>
  );
};

export default Register;
