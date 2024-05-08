import MainLayout from "./components/Layout/MainLayout";
import Login from "./pages/Login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.css";
import storage from "./utils/storage";
import useLoginStore from "./app/loginStore";
import BillingPayOderForm from "./components/Form/Billing-Client-Form/BillingPayOderForm";

function App() {
  const token = storage.getToken();
  const { isAuthenticated } = useLoginStore((state) => ({
    isAuthenticated: state.isAuthenticated,
  }));

  return isAuthenticated || Boolean(token) ? (
    <MainLayout>
      <PrivateRoute />
    </MainLayout>
  ) : (
    <Login />
  );
}

export default App;
