const CommunComp = ({comimage,comh3, comp1, comp2}) => {
    return (
      <div>
        <div>
         
          <img className="commun-img" src={comimage} alt="image" />
          <a className="comATAG" href="/">
            <h3>{comh3}</h3>
          </a>
          <div className="commun-flex">
            <p>{comp1}</p>
            <p>{comp2}</p>
          </div>
        </div>
      </div>
    );
}
 
export default CommunComp;