import React from "react";
import OrianaLogo from "../images/PartnerLogos/Oriana Logo-1.png"
import KynLogo from "../images/PartnerLogos/KYN Logo-2.png"
import PrashanthHospitalLogo from "../images/PartnerLogos/Prashanth Hospital Logo.png";
import PoorvikaLogo from "../images/PartnerLogos/Poorvika Logo.jpg";

const Partners = () => {
  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-3">
      
        <img src={OrianaLogo} alt="partner" height={200} />
      

      
        <img src={KynLogo} alt="partner" height={200} />
    
   
        <img src={PrashanthHospitalLogo} alt="partner" height={200} />
     

   
        <img src={PoorvikaLogo} alt="partner" />
      

    
        <img src="https://via.placeholder.com/150" alt="partner" />
     

     
        <img src="https://via.placeholder.com/150" alt="partner" />
      
    </div>
  );
};

export default Partners;
