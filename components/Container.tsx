interface ChildrenProps {
  children?: React.ReactNode;
}

const Container = (props: ChildrenProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-5">{props.children}</div>
  );
};

export default Container;
