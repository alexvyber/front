import { FC } from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { GetStaticProps } from "next";
import { getAboutContent } from "~/lib/api";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { About } from "~/graphql/types.generated";
import { Wrapper } from "~/components/Wrapper";

interface Props {
  about: About;
}

const AboutPage: FC<Props> = ({ about }) => {
  return (
    <Wrapper>
      <CenteredColumn>
        <div className="flex flex-col space-y-12" data-cy="about-page">
          <div className="prose">
            <MarkdownRenderer>{about.content}</MarkdownRenderer>
          </div>
        </div>
      </CenteredColumn>
    </Wrapper>
  );
};

function zalupa(zalupa: string): number {
  return 4;
}

export const getStaticProps: GetStaticProps = async () => {
  const about: About = (await getAboutContent()) || [];
  return {
    props: {
      about,
    },
  };
};

export default AboutPage;
