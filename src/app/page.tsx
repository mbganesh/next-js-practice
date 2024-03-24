import Header from "@/components/Header";
import Image from "next/image";
import { CONSTANT_DATA } from "@/utils/constant";

export default function Home() {
  const { menus, siteName, menuButton, ...data } = CONSTANT_DATA;

  return (
    <main className="bg-purple-50 text-gray-700 p-3  h-screen ">
      <div className="p-5 border rounded-md bg-indigo-200">
        <Header siteName={siteName} menus={menus} menuButton={menuButton} />
      </div>
    </main>
  );
}
