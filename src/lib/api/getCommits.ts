import { fetchAPI } from "./index";

// import fetch from 'node-fetch'

// const url ='https://api.github.com/';
// const headers = {
//   "Content-Type": "application/json",
//   "client_id": "1001125",
//   "client_secret": "876JHG76UKFJYGVHf867rFUTFGHCJ8JHV"
// }
// const data = {
//   "name": "Wade Wilson",
//   "occupation": "Murderer",
//   "age": "30 (forever)"
// }

// fetch(url, { method: 'POST', headers: headers, body: data})
//   .then((res) => {
//      return res.json()
// })
// .then((json) => {
//    // Do something with the returned data.
//   console.log(json);
// });

export async function getCommits() {
  const octokit = new Octokit({ auth: TOKEN });

  const { data } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "alexvyber",
    repo: "1000DaysOfCode",
  });

  // console.log(data)

  // const repo = "https://github.com/alexvyber/1000daysofcode.git";
  // // Aray for dev purposes
  // const testArray: Commit[] = [];
  // for (let i = 0; i < 10; i++) {
  //   const commit = {
  //     commitId: "29bc7c1",
  //     comment: "Day 21(React | 1.5 hours): React and TypeScript...",
  //     time: "1d ago",
  //     datetime: "2021-01-27T16:35",
  //     README: `
  //     Learned more about React and TypeScript.
  //     - Higher-Order Components
  //     - Function Overloading
  //     - React built-in types`,
  //   };
  //   testArray.push(commit);
  // }

  return data;
}
