import Head from "next/head";
import React from "react";
import NavBar from "../components/Utilities/NavBar";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Contact Us || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <div>ContactUs</div>
    </>
  );
};

export default ContactUs;