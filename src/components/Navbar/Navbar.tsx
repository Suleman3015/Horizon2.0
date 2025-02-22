import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Horizon from "../../../public/Images/LogoTrans.png";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Navbar() {
  const [hoverState, setHoverState] = useState(false);
  const largeScreen = useMediaQuery("(min-width:1774px)");
  const matchesTab = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then((gsapModule) => {
        import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
          const gsap = gsapModule.default;
          gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);

          gsap.set(".headerBg", {
            background:
              "linear-gradient(180deg,rgba(0, 45, 86, 0.6306897759103641) 0%,rgba(0, 212, 255, 0) 100%)",
            maxWidth: "100%",
            borderBottomLeftRadius: hoverState ? "0px" : "20px",
            borderBottomRightRadius: hoverState ? "0px" : "20px",
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              start: "top+=200",
              end: "+=1",
              scrub: 1,
            },
          });

          tl.to(".headerBg", {
            backgroundColor: "#002d56",
            maxWidth: "1610px",
            borderBottomLeftRadius: matchesTab ? "0px" : "20px",
            borderBottomRightRadius: matchesTab ? "0px" : "20px",

          });
        });
      });
    }
  }, [hoverState, matchesTab]);

  return (
    <div className={`${styles.navbarMain} headerBg`}>
      <div className={`${styles.navbar} `}>
        <Image
          className={styles.navbarimage}
          src={Horizon}
          alt="horizon logo"
        />
        <div className={styles.navContainer}>
        <div className={styles.menuUpperContainer}>
          <Link className={styles.navLightText} href="/">
          <MarkEmailReadIcon className="icon"/> info@thehorizontravels.com
          </Link>
          <Link className={styles.navLightText} href="/">
         <LocalPhoneIcon className="icon"/>
          03323582359
          </Link>

          <Link className={styles.navLightText} href="">
          <FacebookIcon className="icon"/>
          <InstagramIcon className="icon"/>
          <WhatsAppIcon className="icon"/>
          </Link>
        </div>

        <div className={styles.menuContainer}>
          <Link className={styles.navText} href="/">
            Home
          </Link>
          <Link className={styles.navText} href="/">
            International Tours
          </Link>
          <Link className={styles.navText} href="/">
            Domestic Tours
          </Link>
          <Link className={styles.navText} href="/">
            About
          </Link>
          <Link className={styles.navText} href="/">
            Contact
          </Link>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
