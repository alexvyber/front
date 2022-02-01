import { GetStaticProps } from "next/types";
import * as React from "react";
import { Card } from "../../components/Projects/Card";
import { StripeBG } from "~/components/StripeBG";

export default function Projects() {
  return (
    <>
      <section className="pt-20 bg-gray-50 pb-6">
        <div className="container mx-auto">
          <main className="flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </main>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
