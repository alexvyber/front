import { fetchAPI } from "./index";

export async function getCommits() {
  const data = await fetchAPI(
    `
    query {
      repository(owner:"octocat", name:"Hello-World") {
        issues(last:20, states:CLOSED) {
          edges {
            node {
              title
              url
              labels(first:5) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
 `,
    {
      variables: {},
    }
  );
  return data?.posts[0];
}
