const commits = [
  {
    commitId: "29bc7c1",
    comment: "Day 21(React | 1.5 hours): React and TypeScript...",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    README: `
      Learned more about React and TypeScript.
      - Higher-Order Components
      - Function Overloading
      - React built-in types`,
  },
  {
    commitId: "29bc7c1",
    comment: "Day 21(React | 1.5 hours): React and TypeScript...",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    README: `
      Learned more about React and TypeScript.
      - Higher-Order Components
      - Function Overloading
      - React built-in types`,
  },
  {
    commitId: "29bc7c1",
    comment: "Day 21(React | 1.5 hours): React and TypeScript...",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    README: `
      Learned more about React and TypeScript.
      - Higher-Order Components
      - Function Overloading
      - React built-in types`,
  },
  {
    commitId: "29bc7c1",
    comment: "Day 21(React | 1.5 hours): React and TypeScript...",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    README: `
      Learned more about React and TypeScript.
      - Higher-Order Components
      - Function Overloading
      - React built-in types`,
  },
  {
    commitId: "29bc7c1",
    comment: "Day 21(React | 1.5 hours): React and TypeScript...",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    README: `
      Learned more about React and TypeScript.
      - Higher-Order Components
      - Function Overloading
      - React built-in types`,
  },
];

export default function Commits() {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {commits.map((commit) => (
        <li
          key={commit.commitId}
          className="relative bg-white py-5 px-4 hover:bg-indigo-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <a href="#" className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 truncate">
                  {commit.comment}
                </p>
                <p className="text-sm text-indigo-500 mt-1 truncate">
                  {commit.commitId}
                </p>
              </a>
            </div>
            <time
              dateTime={commit.datetime}
              className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
            >
              {commit.time}
            </time>
          </div>
          <div className="mt-1">
            <p className="line-clamp-2 text-sm text-gray-600">
              {commit.README}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
