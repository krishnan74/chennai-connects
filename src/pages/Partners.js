import React from "react";
import OrianaLogo from "../images/PartnerLogos/Oriana Logo-1.png";
import KynLogo from "../images/PartnerLogos/KYN Logo-2.png";
import PrashanthHospitalLogo from "../images/PartnerLogos/Prashanth Hospital Logo.png";
import PoorvikaLogo from "../images/PartnerLogos/Poorvika Logo.jpg";

const Partners = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-10">
      <div className="flex justify-center items-center">
        <img src={OrianaLogo} alt="Oriana" className="max-h-40" />
      </div>
      <div className="flex justify-center items-center">
        <img src={KynLogo} alt="Kyn" className="max-h-40" />
      </div>
      <div className="flex justify-center items-center">
        <img src={PoorvikaLogo} alt="Poorvika" className="max-h-40" />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={PrashanthHospitalLogo}
          alt="Prashanth Hospital"
          className="max-h-40"
        />
      </div>
      
      <div className="flex justify-center items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder 1"
          className="max-h-40"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder 2"
          className="max-h-40"
        />
      </div>
    </div>
  );
};

export default Partners;
