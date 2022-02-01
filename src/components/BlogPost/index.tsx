import * as React from "react";
import { Post } from "~/graphql/types.generated";
import { CenteredColumn } from "~/components/CenteredColumn";
import { PostHeader } from "../../components/BlogPost/PostHeader";
import Head from "next/head";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { LinkBack } from "./LinkBack";
import { Wrapper } from "~/components/Wrapper";

export function BlogPost({ post }: { post: Post }) {
  return (
    <Wrapper>
      <CenteredColumn data-cy="overthought-post">
        <div className="mx-auto">
          <Head>
            <title>{post.title}</title>
          </Head>
          <PostHeader title={post.title} updatedAt={post.updatedAt} />
          <div className="mt-8 prose md:prose-md ">
            <MarkdownRenderer>{post.content}</MarkdownRenderer>
          </div>
          <div className="mt-6">
            <LinkBack />
          </div>
        </div>
      </CenteredColumn>
    </Wrapper>
  );
}
