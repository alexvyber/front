import { GetStaticProps } from "next";
import { FC } from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { Wrapper } from "~/components/Wrapper";

import * as React from "react";
import Commits from "~/components/Commit";
// import { Commit } from "@/pages/1000gays";

import { getCommits } from "~/lib/api/getCommits";

// type Props = {
//   commits: Array<Commit>;
// };

type CommitProps = {
  children?: React.ReactNode;
};

const Days: FC<any> = ({ commits }: any) => {
  return (
    <Wrapper>
      <CenteredColumn>
        <Commits commits={commits} />
      </CenteredColumn>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const commits: any = await getCommits();

  return {
    revalidate: 60 * 60 * 2,
    props: {
      commits,
    },
  };
};

export default Days;
