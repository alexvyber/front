import { GetStaticProps } from "next";
import { FC } from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { Wrapper } from "~/components/Wrapper";

import * as React from "react";
import Commits from "~/components/Commit";
type Commit = {
  name: string;
};

type Props = {
  commits: Array<Commit>;
};

type CommitProps = {
  children?: React.ReactNode;
};
const Commit = ({ children }: CommitProps) => <section>{children}</section>;

const Days: FC<Props> = ({ commits }: Props) => {
  return (
    <Wrapper>
      <CenteredColumn>
        {/* {commits.map((item) => (
          <Commit key={item.name}> {item.name} </Commit>
        ))} */}

        <Commits />
      </CenteredColumn>
    </Wrapper>
  );
};

const repo = "https://github.com/alexvyber/1000daysofcode.git";
// Aray for dev purposes
const testArray: Commit[] = [];
for (let i = 0; i < 20; i++) {
  testArray.push({ name: `My name is ${i}` });
}

const getCommits = async () => testArray; // tmp

export const getStaticProps: GetStaticProps = async () => {
  const commits: Commit[] = await getCommits();
  console.log(commits);

  return {
    revalidate: 60 * 60 * 2,
    props: {
      commits,
    },
  };
};

export default Days;
