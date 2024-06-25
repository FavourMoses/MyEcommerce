import "./landing.css";
const Landcomp = ({ page, pagecontent }) => {
  return (
    <div className="comp1">
      <a className="atag" href={page}>
        {" "}
        Soft <br />
        {pagecontent}
      </a>
    </div>
  );
};

export default Landcomp;
