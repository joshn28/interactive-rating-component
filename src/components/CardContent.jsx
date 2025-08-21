import "./CardContent.module.css";

const CardContent = ({heading, text, center}) => {
  return (
    <div style={{textAlign: center && "center"}}>
      <h1>{heading}</h1>
      <p>
        {text}
      </p>
    </div>
  );
};

export default CardContent;
