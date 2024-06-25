import "./landing.css";
const Landcomp2 = ({
  hd,
  page,
  parapage1,
  parapage2,
  parapage3,
  parapage4,
  parapage5,
  parapage6,
  parapage7,
  pagecontent1,
  pagecontent2,
  pagecontent3,
  pagecontent4,
  pagecontent5,
  pagecontent6,
  pagecontent7,
}) => {
  return (
    <div className="hcdiv1">
      <h3 className="h3">
        <a href={page}>Soft{hd}</a>
      </h3>

      <p>
        <a href={parapage1}>Apartment for sale in {pagecontent1}</a>
      </p>
      <p>
        <a href={parapage2}>Villa/House for sale in {pagecontent2}</a>
      </p>
      <p>
        <a href={parapage3}>Apartment for Rent in {pagecontent3}</a>
      </p>
      <p>
        <a href={parapage4}>Villa/House for Rent in {pagecontent4}</a>
      </p>
      <p>
        <a href={parapage5}>Cars in {pagecontent5}</a>
      </p>
      <p>
        <a href={parapage6}>Classifieds in {pagecontent6}</a>
      </p>
      <p>
        <a href={parapage7}> Jobs in {pagecontent7}</a>
      </p>
    </div>
  );
};

export default Landcomp2;
