import { store } from "@/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthGuard from "./authgaurd";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <AuthGuard>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </AuthGuard>
      </Provider>
    </>
  );
}
