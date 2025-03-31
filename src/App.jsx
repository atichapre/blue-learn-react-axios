// import { AxiosAsyncAwait2 } from "./components/AxiosAsyncAwait-2";
// import { AxiosAsyncAwait3 } from "./components/AxiosAsyncAwait-3";
import { Thailand } from "./components/Thailand";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center">
      {/* <section className="w-full p-5 bg-amber-100 flex">
          <AxiosAsyncAwait2 />
        </section>
        <section className="w-full p-5 bg-amber-100 flex">
          <AxiosAsyncAwait3 />
        </section> */}
      <section className="w-full">
        <Thailand />
      </section>
    </div>
  );
}
