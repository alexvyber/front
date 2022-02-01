export function Wrapper(props) {
  const { children } = props;
  return <div className="px-4 pt-24 pb-20 lg:px-0 ">{children}</div>;
}
