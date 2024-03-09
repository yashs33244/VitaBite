import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home</Link>
    </li>
  </Fragment>
);

export const PagesDasktop = () => (
  <Fragment>
    <li>
      <Link href="/about">About</Link>
    </li>
  </Fragment>
);
export const PagesMobile = () => (
  <Fragment>
    <li>
      <Link href="/about">About us</Link>
    </li>
    <li>
      <Link href="/services">all services</Link>
    </li>
    <li>
      <Link href="/service-details">service details</Link>
    </li>
    <li>
      <Link href="/faqs">faqs</Link>
    </li>
    <li>
      <Link href="/farmers">Farmers</Link>
    </li>
    <li>
      <Link href="/404">404 error</Link>
    </li>
  </Fragment>
);
export const Portfolio = () => (
  <Fragment>
    <li>
      <Link href="/portfolio-grid">Portfolio grid</Link>
    </li>
    <li>
      <Link href="/portfolio-fluid">Portfolio Fluid</Link>
    </li>
    <li>
      <Link href="/portfolio-details">Portfolio details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
    <Link href="/blog-details">blog details</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    {/* <li>
      <Link href="/shop-grid">shop Grid</Link>
    </li>
    <li>
      <Link href="/shop-left-sidebar">shop left sidebar</Link>
    </li>
    <li>
      <Link href="/shop-right-sidebar">shop right sidebar</Link>
    </li> */}
    <li>
      <Link href="">Product details</Link>
    </li>
    <li>
      <Link href="">cart page</Link>
    </li>
    {/* <li>
      <Link href="/checkout">checkout</Link>
    </li> */}
    <li>
      <Link href="">wishlist</Link>
    </li>
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </Fragment>
);
