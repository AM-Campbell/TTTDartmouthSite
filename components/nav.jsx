import styles from "../styles/Nav.module.css";
import { useState } from "react";
import Link from "next/link";

const X = (props) => {
  return (
    <div className={styles.x} onClick={props.handleToggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </div>
  );
};

const Borgor = (props) => {
  return (
    <div className={styles.borgor} onClick={props.handleToggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
    </div>
  );
};

const DesktopNav = (props) => {
  return (
    <div className={styles.desktopContainer}>
      {props.navLinks.map((item) => {
        return (
          <div className={styles.desktopNavItem} key={item.route}>
            <Link href={item.route}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

const MobileNav = (props) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.mobile}>
      {open && (
        <div className={styles.mobileOpen}>
          <X handleToggle={handleToggle} />
          {props.navLinks.map((item) => {
            return (
              <Link href={item.route} key={item.route}>
                <h2 className={styles.mobileNavItem}>{item.name}</h2>
              </Link>
            );
          })}
        </div>
      )}
      {!open && <Borgor handleToggle={handleToggle} />}
    </div>
  );
};

export default function Nav() {
  const navLinks = [
    { name: "Home", route: "/" },
    { name: "Team", route: "team" },
    { name: "Projects", route: "projects" },
    { name: "For Students", route: "students" },
    { name: "For Businesses", route: "businesses" },
  ];

  return (
    <>
      <DesktopNav navLinks={navLinks} className={styles.desktopNav} />
      <MobileNav navLinks={navLinks} className={styles.mobileNav} />
    </>
  );
}
