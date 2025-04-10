import React from "react";
import Hero from "./hero/hero";
import Header from "./Components/header";

import Ship from "./Components/ship/Index";
import TestAssist from "./Components/testAssist";
import ReqOpsTestAssist from "./Components/RoundedTriangle";
import MoneyBack from "./Components/moneyBack";
import FindOut from "./Components/findOut";
import Bugs from "./Components/bugs/bugs";
import Data from "./Components/bugs/data";
import Faqs from "./Components/faqs";

import GoBack from "./Components/GoBack/Index";

import Sampalist from "./Components/Sampalist/page";
import Preper from "./Components/preper";
import RoundedTriangle from "./Components/RoundedTriangle";
import Client from "./Components/ClientTestimonials/Index";
import Hire from "./Components/hero/Hire";
import Main from "./Components/hero/Main";
import V from "./Components/Background";
import Cost from "./Components/cost";
import ClientH from "./Components/ClientTestimonials/clientH";
import Background from "./Components/Background";
import Service from "./Components/SubscriptionService/Index";
import Subscription from "./Components/SubscriptionService/Subscription";
import Hero1 from "./hero/hero1";



function page() {
  return (
    <>

      <Header />
      <Hire/>
      <Main/>
      <Cost/>
      <Subscription/>
      <Service/>
      <ClientH/>
      <Client/>
      <Ship />
      <TestAssist />
      
 
      <MoneyBack />
      <FindOut />
      <Bugs />
      <Data />
      {/* <Hero />  */}
      <Hero1/>
  


<GoBack />
<Faqs />
      {/* <Sampalist/> is main model h  */}
      {/* <RoundedTriangle /> */}
      <Preper/>
      {/* <Background/> */}
     
    </>
  );
}

export default page;
