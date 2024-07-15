import React from "react";
import {
  fAddresse,
  fHeures,
  fReferer,
  fPourNousJoindre,
} from "@/lib/dataClinique";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/clinique/parolanaudiere-logoblanc.svg";

export default function Footer() {
  return (
    <footer className=" flex flex-col  bg-verde_oscuro text-white  text-lg">

      <section className="flex">
        <p className="items-center mx-auto pt-5">
          2024 Pruinboom Institute / Terms & conditions and cookies policy
        </p>
      </section>
    </footer>
  );
}
