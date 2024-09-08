type ComponentTitleProps = {
  children: React.ReactNode;
};
export default function ComponentTitle(props: ComponentTitleProps) {
  const { children } = props;
  return <h1 className="text-3xl font-bold mb-4">{children}</h1>;
}
