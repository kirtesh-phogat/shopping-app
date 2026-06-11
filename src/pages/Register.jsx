import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters")
    .regex(/^[A-Za-z ]+$/, "Only alphabets are allowed"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const formSubmitHandler = (formData) => {
    let userData = [];

    try {
      const storedUsers = JSON.parse(localStorage.getItem("userData"));
      userData = Array.isArray(storedUsers) ? storedUsers : [];
    } catch {
      userData = [];
    }

    const normalizedEmail = formData.email.trim().toLowerCase();
    const emailAlreadyExists = userData.some(
      (user) => user.email?.toLowerCase() === normalizedEmail,
    );

    if (emailAlreadyExists) {
      toast.error("An account with this email already exists.");
      return;
    }

    const userWithImage = {
      ...formData,
      email: normalizedEmail,
      image: `https://i.pravatar.cc/150?u=${normalizedEmail}`,
    };

    localStorage.setItem(
      "userData",
      JSON.stringify([...userData, userWithImage]),
    );

    toast.success("Registered successfully!");
    reset();
    navigate("/login");
  };

  return (
    <div className="w-full max-w-sm mx-auto my-12 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(formSubmitHandler)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign Up to our platform
        </h5>

        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Full Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="John Doe"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="register-email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            id="register-email"
            type="email"
            {...register("email")}
            placeholder="name@company.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="register-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            id="register-password"
            type="password"
            {...register("password")}
            placeholder="Enter your password"
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
          Register your account
        </button>
      </form>
    </div>
  );
};

export default Register;
