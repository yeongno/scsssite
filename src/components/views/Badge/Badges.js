import { throttle } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import "../../../styles/Badge.scss";

function Badges() {
  const [overmid, setOverMid] = useState(false);
  const [beforeScrollY, setbeforeScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    setbeforeScrollY(window.pageYOffset);
  }, [beforeScrollY]);

  const scrollEvent = useMemo(
    () =>
      throttle(() => {
        if (window.pageYOffset < 1500) {
          setOverMid(true);
          console.log("켜기");
        } else {
          setOverMid(false);
          console.log("끄기");
        }
        //이전 스크롤값 저장
        setbeforeScrollY(window.pageYOffset);
      }, 300),
    [overmid]
  );
  return (
    <div className="inner">
      <div className={overmid === true ? "badge active" : "badge off"}>
        <img
          src="https://media.istockphoto.com/vectors/flag-ribbon-welcome-old-school-flag-banner-vector-id1223088904?k=20&m=1223088904&s=612x612&w=0&h=b_ilJpFTSQbZeCrZusHRLEskmfiONWH0hFASAJbgz9g="
          alt=""
        />
      </div>
    </div>
  );
}

export default Badges;
