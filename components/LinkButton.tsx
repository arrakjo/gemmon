import Link from "next/link";

interface ButtonProps {
  title?: string;
  url?: string;
}

const LinkButton = (props: ButtonProps) => {
  return (
    <Link href={props.url}>
      <a className="bg-whitesmoke text-primary px-8 py-3 rounded-full shadow-xl hover:scale-105 active:scale-100 duration-200 transition font-medium">
        {!props.title ? "Link" : props.title}
      </a>
    </Link>
  );
};

export default LinkButton;
