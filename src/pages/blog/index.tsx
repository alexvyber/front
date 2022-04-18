import { PageHeader } from "~/components/PageHeader";
import { BlogList } from "~/components/Blog/List";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getAllPosts } from "~/lib/api";
import { GetStaticProps } from "next";
import { FC } from "react";
import { Post } from "~/graphql/types.generated";
import { Wrapper } from "~/components/Wrapper";

interface Props {
  posts: Array<Post>;
}

const Blog: FC<Props> = ({ posts }) => {
  return (
    <Wrapper>
      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          <div className=" md:px-4">
            <PageHeader
              title="Блог"
              subtitle="Version 0.2.0 🖥️"
            />
          </div>
          {posts && <BlogList posts={posts} />}
        </div>
      </CenteredColumn>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: Array<Post> = (await getAllPosts()) || [];
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      posts,
    },
  };
};

export default Blog;
