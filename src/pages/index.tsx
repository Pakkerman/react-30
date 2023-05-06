import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import DayWrapper from "~/components/DayWrapper";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="text-blue-200 ">
      <h1 className=" text-center text-4xl">React 30</h1>
      <ul className="flex flex-col space-y-4">
        <DayWrapper day={1} title={"PitchDetector"} />
        <DayWrapper day={2} title={"unknown"} />
        <DayWrapper day={3} title={"unknown"} />
        <DayWrapper day={4} title={"unknown"} />
        <DayWrapper day={5} title={"unknown"} />
      </ul>
    </div>
  );
};

export default Home;
