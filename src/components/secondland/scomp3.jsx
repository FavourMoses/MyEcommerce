import "./secland.css";
const Scomp3 = ({ s3img, amount, type, address, link }) => {
  return (
    <a href={link} className="scomp3p">
      <img className="s3image" src={s3img} alt="img" />
      <p className="red">{amount}</p>
      <h3 className="type">{type}</h3>
      <p className="address">{address}</p>
    </a>
  );
};

export default Scomp3;
