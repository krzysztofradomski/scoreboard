type ComponentContainerProps = {
  children: React.ReactNode;
};
export default function ComponentContainer(props: ComponentContainerProps) {
  const { children } = props;
  return <div className="container mx-auto p-4">{children}</div>;
}
