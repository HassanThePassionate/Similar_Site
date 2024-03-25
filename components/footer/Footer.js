import Link from "next/link";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="container">
      <div className={style.footer}>
        <ul className={style.list}>
          <h4>Online Marketing</h4>
          <li>
            <Link href="#" className="underline">
              Digital Marketing Suite
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Search Engine Visibility
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              GoDaddy Email Marketing
            </Link>
          </li>
        </ul>
        <ul className={style.list}>
          <h4>Productivity</h4>
          <li>
            <Link href="#" className="underline">
              Professional Email
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Workspace Email
            </Link>
          </li>
        </ul>
        <ul className={style.list}>
          <h4>Websites & Security</h4>
          <li>
            <Link href="#" className="underline">
              Website Design Services
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Website Security and Backups
            </Link>
          </li>
        </ul>
        <ul className={style.list}>
          <h4>Hosting & Servers</h4>
          <li>
            <Link href="#" className="underline">
              Gen 4 VPS & Dedicated Servers
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Windows Hosting (Plesk)
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              WordPress
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Managed WordPress Ecommerce
            </Link>
          </li>
        </ul>
        <ul className={style.list}>
          <h4>Partner Programs</h4>
          <li>
            <Link href="#" className="underline">
              API Reseller
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Basic & Pro Reseller
            </Link>
          </li>
        </ul>
        <ul className={style.list}>
          <h4>Domain Aftermarket</h4>
          <li>
            <Link href="#" className="underline">
              GoDaddy Auctions®
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              List for Sale
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Domain Broker Service
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              CashParking®
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Backorders & Monitoring
            </Link>
          </li>
        </ul>
        <ul className={style.list}>
          <h4>Legacy</h4>
          <li>
            <Link href="#" className="underline ">
              Calendar
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Web & Classic Hosting
            </Link>
          </li>
          <li>
            <Link href="#" className="underline">
              Website Builder 7
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.copyright}>
        <p>
          Copyright &copy; 1999 - 2024 GoDaddy Operating Company, LLC. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
