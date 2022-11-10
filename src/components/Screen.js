import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Display = (props) => {
 const markdown = props.markupdata
  return (
    <div className="Gogu">
     
      <ReactMarkdown  children={markdown} remark={[remarkGfm]} />
    </div>
  );
};

export default Display;