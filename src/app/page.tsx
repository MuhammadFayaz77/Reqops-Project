import React from "react";

import Header from "./Components/header";

import Ship from "./Components/ship/Index";
import TestAssist from "./Components/testAssist";

import MoneyBack from "./Components/moneyBack";
import FindOut from "./Components/findOut";
import Bugs from "./Components/bugs/bugs";
import Data from "./Components/bugs/data";
import Faqs from "./Components/faqs";

import GoBack from "./Components/GoBack/Index";

import Preper from "./Components/preper";

import Client from "./Components/ClientTestimonials/Index";
import Hire from "./Components/hero/Hire";
import Main from "./Components/hero/Main";

import Cost from "./Components/cost";
import ClientH from "./Components/ClientTestimonials/clientH";

import Service from "./Components/SubscriptionService/Index";
import Subscription from "./Components/SubscriptionService/Subscription";

function page() {
  return (
    <>
      <Header />
      <Hire />
      <Main />
      <Cost />
      <Subscription />
      <Service />
      <ClientH />
      <Client />
      <Ship />
      <TestAssist />
      <MoneyBack />
      <FindOut />
      <Bugs />
      <Data />
      <GoBack />
      <Faqs />
      <Preper />
    </>
  );
}

export default page;
