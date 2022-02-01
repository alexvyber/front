import { GetStaticProps } from "next";
import { Post } from "~/graphql/types.generated";
import { CenteredColumn } from "~/components/CenteredColumn";
import { Timeline } from "~/components/Timeline";
import { getAllPosts } from "~/lib/api";
import { Hero } from "../components/Hero";
import { FC } from "react";
import { Wrapper } from "~/components/Wrapper";

interface Props {
  posts: Array<Post>;
}

const Home: FC<Props> = ({ posts }) => {
  return (
    <Wrapper>
      <Hero />
      <CenteredColumn>
        <Timeline posts={posts} />
      </CenteredColumn>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: Array<Post> = (await getAllPosts()) || [];
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60 * 2,
    props: {
      posts,
    },
  };
};

export default Home;
