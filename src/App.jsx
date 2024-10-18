import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layouts/Layout";
import Home from "./Routes/Home";
import AboutUs from "./Routes/CompanyNavigation/AboutUs/AboutUs";
import Contacts from "./Routes/CompanyNavigation/Contact/Contact"
import SignIn from "./Routes/SignForm/SignIn";
import SignUp from "./Routes/SignForm/SignUp";
import ForgotPassword from "./Routes/SignForm/ForgotPassword";
import OrdersPage from "./Components/Orders/OrdersPage";
import PaymentPage from "./helperComponents/PaymentsPage";
import Favorites from "./Routes/BottomNavigationRoutes/Favorites/Favorites";
import General from "./Routes/BottomNavigationRoutes/General/General";
import Balance from "./Routes/BottomNavigationRoutes/Balance/Balance";
import Communications from "./Routes/BottomNavigationRoutes/Communications/Communications";
import Purchases from "./Routes/BottomNavigationRoutes/Purchases/Purchases";
import Profile from "./Routes/Profile";
import Deliveries from "./Routes/BottomNavigationRoutes/Purchases/PurchaseBottomNavigation/Deliveries";
import Checks from "./Routes/BottomNavigationRoutes/Purchases/PurchaseBottomNavigation/Checks";
import SubPurchases from "./Routes/BottomNavigationRoutes/Purchases/PurchaseBottomNavigation/Purchases";
import Returns from "./Routes/BottomNavigationRoutes/Purchases/PurchaseBottomNavigation/Returns";
import FAQ from "./Routes/AskAQuestion/FAQ";
import MakeOrder from "./Routes/AskAQuestion/Navigation/MakeOrder";
import PaymentMethods from "./Routes/AskAQuestion/Navigation/PaymentMethods";
import Delivery from "./Routes/AskAQuestion/Navigation/Delivery";
import Return from "./Routes/AskAQuestion/Navigation/Return";
import MoneyRefund from "./Routes/AskAQuestion/Navigation/MoneyRefund";
import RulesForSelling from "./Routes/AskAQuestion/Navigation/RulesForSelling";
import RulesTradingPlatform from "./Routes/AskAQuestion/Navigation/RulesTradingPlatform";
import AskAQuestion from "./Routes/AskAQuestion/Navigation/AskAQuestion";
import { LangProvider } from "./Contexts/LangContext";
import FeedBack from "./Routes/BottomNavigationRoutes/Feedback/Feedback";
import Comments from "./Routes/BottomNavigationRoutes/FeedBack/FeedBackBottomNavigation/Comments";
import Questions from "./Routes/BottomNavigationRoutes/FeedBack/FeedBackBottomNavigation/Questions";
import { CurrencyProvider } from "./Contexts/CurrencyContext";
import Details from "./Routes/BottomNavigationRoutes/Details/Details";
import Company from "./Routes/CompanyNavigation/Company";
import BugBounty from "./Routes/CompanyNavigation/BugBounty/BugBounty";
import PressService from "./Routes/CompanyNavigation/PressService/PressService";
import Requisites from "./Routes/CompanyNavigation/Requisites/Requisites";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "payment", element: <PaymentPage /> },
      {
        path: "faq",
        element: <FAQ />,
        children: [
          { path: "ask-a-question", element: <AskAQuestion /> },
          { path: "how-make-order", element: <MakeOrder /> },
          { path: "payment-methods", element: <PaymentMethods /> },
          { path: "delivery", element: <Delivery /> },
          { path: "return", element: <Return /> },
          { path: "money-refund", element: <MoneyRefund /> },
          { path: "rules-for-selling", element: <RulesForSelling /> },
          {
            path: "rules-for-using-trading-platform",
            element: <RulesTradingPlatform />,
          },
        ],
      },
      {
        path: "services",
        element: <Company />,
        children: [
          { path: "about-us", element: <AboutUs /> },
          { path: "requisites", element: <Requisites /> },
          { path: "pressService", element: <PressService /> },
          { path: "contact", element: <Contacts /> },
          { path: "bugBounty", element: <BugBounty /> },

          {
            path: "rules-for-using-trading-platform",
            element: <RulesTradingPlatform />,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "general", element: <General /> },
          { path: "favorites", element: <Favorites /> },
          {
            path: "purchases",
            element: <Purchases />,
            children: [
              { path: "Deliveries", element: <Deliveries /> },
              { path: "Purchases", element: <SubPurchases /> },
              { path: "Checks", element: <Checks /> },
              { path: "Returns", element: <Returns /> },
            ],
          },
          {
            path: "feedBack",
            element: <FeedBack />,
            children: [
              { path: "comments", element: <Comments /> },
              { path: "questions", element: <Questions /> },
            ],
          },
          { path: "communications", element: <Communications /> },
          { path: "balance", element: <Balance /> },
          { path: "details", element: <Details /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <LangProvider>
      <CurrencyProvider>
        <RouterProvider router={router} />
      </CurrencyProvider>
    </LangProvider>
  );
}

export default App;
