export function TimeLineEntryIcon({ Icon, isDivider, color }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex justify-center p-3 rounded-full align-center border-2 border-indigo-300 dark:border-gray-1000 text-indigo-500   
        )}`}
      >
        <Icon size={16} />
      </div>
      {isDivider && (
        <div className="flex-1 w-px -mb-12 bg-indigo-200 md:-mb-12 dark:bg-indigo-800 timeline-stroke" />
      )}
    </div>
  );
}
