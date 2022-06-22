export type Commit = {
  commitId: string;
  comment: string;
  time: string;
  datetime: string;
  README: string;
};

type CommitProps = {
  commits: Commit[];
};

import * as timeago from "timeago.js";

export default function Commits({ commits }: any) {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {commits.map((commit) => (
        <li
          key={commit.sha}
          className="relative bg-white py-5 px-4 hover:bg-indigo-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <a href={commit.html_url} className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 ">
                  {commit.commit.message}
                </p>
                <p className="text-sm text-indigo-500 mt-1 truncate">
                  {commit.sha.slice(0, 8)}
                </p>
              </a>
            </div>
            <time
              dateTime={commit.commit.committer.date}
              className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
            >
              {timeago.format(
                new Date(commit.commit.committer.date).toLocaleString()
              )}
            </time>
          </div>
        </li>
      ))}
    </ul>
  );
}
