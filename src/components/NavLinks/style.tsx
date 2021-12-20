export const NewLabel = (props) => {
  const className = `nav-label flex ${props.isActive && "active"}`;
  return <div className={className}>{props.children}</div>;
};
