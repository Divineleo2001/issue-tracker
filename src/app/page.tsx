import Image from "next/image";
import PatientsPage from "./patients/page";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl p-5 font-bold text-center text-sky-500">Welcome to the Health Care App</h1>
      <div className="max-w-xl mx-auto md:max-w-none">
        <PatientsPage />
      </div>
    </div>
  );
}
