import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <div className="box">
      <Title name={props.titleName} />
      <Description text={props.descText} />
    </div>
  );
};

export default Content;
