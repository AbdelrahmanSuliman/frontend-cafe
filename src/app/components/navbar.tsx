"use client";
import Image from "next/image";
import logo from "../../../public/pour-logo.png";
import { useRef } from "react";

export default function Navbar() {
  const newsletterModalRef = useRef<HTMLDialogElement>(null);
  const closeModal = () => newsletterModalRef.current?.close();
  return (
    <div className="navbar-center sticky top-0 bg-base-200 shadow-sm p-10 flex items-center justify-evenly z-100">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a href="#explore">Explore</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#story">Our story</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li onClick={() => newsletterModalRef.current?.showModal()}>
            <a>Join Our Newsletter</a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="hidden md:flex gap-8 font-heading text-2xl">
          <li className="hover:text-primary cursor-pointer hover:underline underline-offset-4 transition">
            <a href="#explore">Explore</a>
          </li>
          <li className="hover:text-primary cursor-pointer hover:underline underline-offset-4 transition">
            <a>Shop</a>
          </li>
          <li className="hover:text-primary cursor-pointer hover:underline underline-offset-4 transition">
            <a href="#story">Our Story</a>
          </li>
          <li className="hover:text-primary cursor-pointer hover:underline underline-offset-4 transition">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="ml-auto mr-30">
            <button
              className="btn btn-primary"
              onClick={() => newsletterModalRef.current?.showModal()}
            >
              Join Our Newsletter
            </button>
          </li>
        </ul>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none">
        <Image src={logo} alt="Pour Cafe Logo" className="w-50" />
      </div>
      <dialog ref={newsletterModalRef} className="modal sm:modal-middle">
        <div className="modal-box relative">
          <h3 className="font-extrabold text-lg">📬 Join our Newsletter</h3>
          <p className="py-2 text-gray-500">
            Be the first to hear about{" "}
            <span className="font-semibold">sales</span>,
            <span className="font-semibold"> new arrivals</span>, and
            <span className="font-semibold"> exclusive offers</span>.
          </p>

          <div className="join w-full py-4">
            <input
              type="email"
              placeholder="Enter your email..."
              className="input input-bordered join-item w-full text-black"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Maybe later
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
