import "./Title.css";

function Title(props) {
  let strongColor = "var(--primary-red)";
  let divisionColor = "red";
  if (props.style == "style2") {
    strongColor = "var(--bg-color)";
    divisionColor = "var(--bg-color)";
  }
  return (
    <div id="title-box">
      <h1 id="main-title">
        {props.title} <span style={{ color: strongColor }}>{props.strong}</span>
      </h1>
      <div style={{ backgroundColor: divisionColor }} id="division"></div>
    </div>
  );
}

export default Title;
