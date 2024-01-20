import Image from "next/image";
import SpinnerImg from "@/public/spinner.svg"

export default function Loader() {
  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div>
          <Image
            src={SpinnerImg}
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

