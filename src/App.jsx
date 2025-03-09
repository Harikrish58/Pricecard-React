import React from "react";
import Card from "./Components/Card";

const App = () => {
  const plan = [
    {
      subscription: "FREE",
      subscriptionAmount: "$0/month",
      user: "Single User",
      storage: "50GB Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      features: [
        { title: "Unlimited Private Projects", enabled: false },
        { title: "Dedicated Phone Support", enabled: false },
        { title: "Free Subdomain", enabled: false },
        { title: "Monthly Status Reports", enabled: false },
      ],
    },
    {
      subscription: "PLUS",
      subscriptionAmount: "$9/month",
      user: "5 Users",
      storage: "50GB Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      features: [
        { title: "Unlimited Private Projects", enabled: true },
        { title: "Dedicated Phone Support", enabled: true },
        { title: "Free Subdomain", enabled: true },
        { title: "Monthly Status Reports", enabled: false },
      ],
    },
    {
      subscription: "PRO",
      subscriptionAmount: "$49/month",
      user: "Unlimited Users",
      storage: "50GB Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      features: [
        { title: "Unlimited Private Projects", enabled: true },
        { title: "Dedicated Phone Support", enabled: true },
        { title: "Free Subdomain", enabled: true },
        { title: "Monthly Status Reports", enabled: true },
      ],
    },
  ];
  return( 
 <>
 <Card plan={plan} />
 </>
 );
};

export default App;
