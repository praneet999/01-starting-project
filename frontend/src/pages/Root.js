import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const token = useLoaderData();
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
