import { useNavigate } from "react-router-dom";

// TODO1: กำหนด Type สำหรับ prop 'name'
interface NameProps {
  name: string;
}

const Home = ({ name }: NameProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome, {name}!</h1>
      <button
        onClick={() => navigate("/users")}
        className="px-4 py-2 bg-blue-500  rounded hover:bg-blue-600 transition"
      >
        Go to Users List
      </button>
    </div>
  );
};

export default Home;
