import { AxiosAsyncAwait2 } from "./components/AxiosAsyncAwait-2";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-blue-950">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
        <h1 className="w-full p-6 bg-amber-100 font-extrabold">
          First Meet with Axios
        </h1>

        <section className="w-full p-5 bg-amber-100 flex">
          <AxiosAsyncAwait2 />
        </section>
      </div>
    </div>
  );
}
