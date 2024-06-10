import Secondfooter from "./footerlong";

const Footlong = () => {
    return (
      <div className="sfooterp">
        <Secondfooter
          footh="Company"
          fp1="About Us"
          fp2="Advertising"
          fp3="Careers"
          fp4="Terms of Use"
          fp5="privacy policy"
        />
        <Secondfooter
          footh="Nigeria"
          fp1="Lagos"
          fp2="Abuja"
          fp3="Portharcourt"
          fp4="Edo"
          fp5="Delta"
          fp6="Uyo"
          fp7="Kaduna"
          fp8="Abia"
        />
        <Secondfooter
          footh="Other Countries"
          fp1="U.S.A"
          fp2="Uk"
          fp3="Canada"
          fp4="Dubai"
          fp5="France"
          fp6="Korea"
          fp7="Australia"
          fp8="Germany"
        />
        <Secondfooter
          footh="Get Social"
          fp1="Fcebook"
          fp2="Twitter"
          fp3="Instagram"
          fp4="Youtube"
        />
        <Secondfooter footh="Languages" fp1="English" />
      </div>
    );
}
 
export default Footlong;