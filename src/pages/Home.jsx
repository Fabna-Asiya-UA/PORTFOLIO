import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { SiBootstrap, SiMysql } from "react-icons/si";


function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px", minHeight: "80vh" ,color:"#334155" }}>
      <h1 style={{ fontSize: "70px" }}><b>Fabna Asiya UA</b></h1>
      <h3>Python FullStack Developer</h3>
      <br />

      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px", fontSize: "50px" }}>
        <FaPython title="Python" color="#3776AB" />
        <SiDjango title="Django" color="#092E20" />
        <FaReact title="React" color="#61DBFB" />
        <SiHtml5 title="HTML5" color="#E34F26" />
        <SiCss3 title="CSS3" color="#264DE4" />
        <SiJavascript title="JavaScript" color="#F0DB4F" />
        <SiBootstrap title="Bootstrap" color="#7952B3" />
        <SiMysql title="SQL" color="#4479A1" />
      </div><br />
      <p> <b> Python   .     Django   .   React   .   HTML5   .   CSS3   .   JavaScript  .  Bootstrap  .  SQL   </b></p>
    </div>
  );
}

export default Home;
