import Title from "../../components/title/Title";
import "./Skills.css";

const Skills = () => {
  const porcentagens = [75, 50, 90, 90];
  return (
    <div id="myskills-container">
      <Title title={"Minhas"} strong={"Habilidades"} />
      <div className="codingskillbox-container">
        <div id="codingSkillsBox">
          <h1>Coding Skills</h1>
          <div id="progress-bar-box">
            <div className="label-container">
              <label>React</label>
              <label className="percentage">{porcentagens[0]}%</label>
            </div>
            <div className="progress-container">
              <progress value={porcentagens[0]} max="100"></progress>
            </div>
            <div className="label-container">
              <label>Python</label>
              <label className="percentage">{porcentagens[1]}%</label>
            </div>
            <div className="progress-container">
              <progress value={porcentagens[1]} max="100"></progress>
            </div>
            <div className="label-container">
              <label>HTML, CSS</label>
              <label className="percentage">{porcentagens[2]}%</label>
            </div>
            <div className="progress-container">
              <progress value={porcentagens[2]} max="100"></progress>
            </div>
            <div className="label-container">
              <label>Javascript (Vanilla)</label>
              <label className="percentage">{porcentagens[3]}%</label>
            </div>
            <div id="last" className="progress-container">
              <progress value={porcentagens[3]} max="100"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
