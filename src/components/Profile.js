import "./Profile.css";
const Profile = (props) => {
  const handleName = () => {
    alert(`hello ${props.fullname}`);
  };
  return (
    <div className="clapyResets root content">
      
      <div className="rectangle1">{props.children}</div>
      <div className="rectangle2">
        <div className="textContent">
        <div className="jamesStewart">{props.fullname}</div>
        <div className="jamesMaitlandStewartMay201908J">
          <p className="labelWrapper">{props.bio}</p>
        </div>
        
        <button className="btn" onClick={handleName}>Show</button>
      </div>
      </div>
    </div>
  );
};
export default Profile;
