"use client"

import Image from "next/image";
import SpinnerImg from "@/public/spinner.svg"
import { fetchAnime } from "@/app/action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

let page = 2

export type AnimeCard = JSX.Element

export default function Loader() {

  const {ref,inView}= useInView()

  const [data,setData] = useState<AnimeCard[]>([])

  useEffect(()=>{
      if(inView){
        fetchAnime(page).then((res)=>{
            setData([...data,...res])
            page++
        }).catch((err)=>{
          console.log(err)
        })
      }
  },[inView,data])

  return (
    <>
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
       {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
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

