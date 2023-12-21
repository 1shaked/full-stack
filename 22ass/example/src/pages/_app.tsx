import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import { FC } from "react";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default wrapper.withRedux(MyApp);

import { NavBarComponent } from '@/components/navBar'

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
        <NavBarComponent />

        <Component {...props}/>
    </Provider>
  );
};

export default MyApp;