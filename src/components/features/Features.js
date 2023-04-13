import React from "react";
import "./Features.css";
import { ArrowDownward } from "@mui/icons-material";
import { ArrowUpward } from "@mui/icons-material";
export default function Features() {
  return (
      <div className="features">
        <div className="featureItem">
            <span className="featureTitle">Revenue</span>
            <div className="featureContainer">
                <span className="featureMoney">$2,415</span>
                <span className="featureRate">
                    -11.4<ArrowDownward className="featureIcon negative"></ArrowDownward>
                </span>
            </div>
            <span className="featureSub">Compared to last month </span>
        </div>
        <div className="featureItem">
            <span className="featureTitle">Sales</span>
            <div className="featureContainer">
                <span className="featureMoney">$4,415</span>
                <span className="featureRate">
                    -11.4<ArrowDownward className="featureIcon negative"></ArrowDownward>
                </span>
            </div>
            <span className="featureSub">Compared to last month </span>
        </div>
        <div className="featureItem">
            <span className="featureTitle">Cost</span>
            <div className="featureContainer">
                <span className="featureMoney">$2,225</span>
                <span className="featureRate">
                    +2.4<ArrowUpward className="featureIcon"></ArrowUpward>
                </span>
            </div>
            <span className="featureSub">Compared to last month </span>
        </div>
      </div>
  );
}
