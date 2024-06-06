import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ExchangeList } from "./exchange/ExchangeList";
import { ExchangeCreate } from "./exchange/ExchangeCreate";
import { ExchangeEdit } from "./exchange/ExchangeEdit";
import { ExchangeShow } from "./exchange/ExchangeShow";
import { PriceList } from "./price/PriceList";
import { PriceCreate } from "./price/PriceCreate";
import { PriceEdit } from "./price/PriceEdit";
import { PriceShow } from "./price/PriceShow";
import { ArbitrageOpportunityList } from "./arbitrageOpportunity/ArbitrageOpportunityList";
import { ArbitrageOpportunityCreate } from "./arbitrageOpportunity/ArbitrageOpportunityCreate";
import { ArbitrageOpportunityEdit } from "./arbitrageOpportunity/ArbitrageOpportunityEdit";
import { ArbitrageOpportunityShow } from "./arbitrageOpportunity/ArbitrageOpportunityShow";
import { CryptocurrencyList } from "./cryptocurrency/CryptocurrencyList";
import { CryptocurrencyCreate } from "./cryptocurrency/CryptocurrencyCreate";
import { CryptocurrencyEdit } from "./cryptocurrency/CryptocurrencyEdit";
import { CryptocurrencyShow } from "./cryptocurrency/CryptocurrencyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ArbitrageBot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Exchange"
          list={ExchangeList}
          edit={ExchangeEdit}
          create={ExchangeCreate}
          show={ExchangeShow}
        />
        <Resource
          name="Price"
          list={PriceList}
          edit={PriceEdit}
          create={PriceCreate}
          show={PriceShow}
        />
        <Resource
          name="ArbitrageOpportunity"
          list={ArbitrageOpportunityList}
          edit={ArbitrageOpportunityEdit}
          create={ArbitrageOpportunityCreate}
          show={ArbitrageOpportunityShow}
        />
        <Resource
          name="Cryptocurrency"
          list={CryptocurrencyList}
          edit={CryptocurrencyEdit}
          create={CryptocurrencyCreate}
          show={CryptocurrencyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
