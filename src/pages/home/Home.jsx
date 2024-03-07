import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { MainHeading } from "../../components/mainheading/MainHeading";
import { Tutorial } from "../../components/tutorials/Tutorial";
import { Jackpots } from "../../components/jackpots/Jackpots";
import { Designing } from "../../components/designing/Designing";
import { Works } from "../../components/works/Works";
import { Prising } from "../../components/prising/Prising";
import { FreeTutorials } from "../../components/freeTutorials/FreeTutorials";
import { Questin } from "../../components/question/Questin";
import { Read } from "../../components/read/Read";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  return (
    <>
      <section className="main-section">
        <NavBar />
        <MainHeading />
      </section>

      <section>
        <Tutorial />
      </section>

      <section>
        <Jackpots />
      </section>

      <section>
        <Designing />
      </section>

      <section>
        <Works />
      </section>

      <section>
        <Prising />
      </section>

      <section>
        <FreeTutorials />
      </section>

      <section>
        <Questin />
      </section>

      <section>
        <Read />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};
