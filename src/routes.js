/**
=========================================================
Admina
=========================================================
*/
// react
import React from "react";

// Admina layouts
import Overview from "./layouts/overview";
import Projects from "./layouts/projects";
import Transactions from "./layouts/transactions";
import Bills from "./layouts/bills";
import Expenses from "./layouts/expenses";
import Goals from "./layouts/goals";
import Settings from "./layouts/authentication/settings";
import Logout from "./layouts/authentication/sign-up";

// icons
import OverviewIcon from "./assets/images/icons/overview.svg";
import ProjectsIcon from "./assets/images/icons/projects.svg";
import TransactionIcon from "./assets/images/icons/transactions.svg";
import BillsIcon from "./assets/images/icons/bills.svg";
import ExpensesIcon from "./assets/images/icons/expenses.svg";
import GoalsIcon from "./assets/images/icons/goals.svg";
import SettingsIcon from "./assets/images/icons/settings.svg";
import LogoutIcon from "./assets/images/icons/logout.svg";

// icons
import Icon from "./components/Icon";

const routes = [
  {
    type: "collapse",
    name: "Overview",
    key: "overview",
    icon: <Icon src={OverviewIcon} alt="overview" />,
    route: "/overview",
    component: <Overview />,
  },
  {
    type: "collapse",
    name: "Projects",
    key: "projects",
    icon: <Icon src={ProjectsIcon} alt="projects" />,
    route: "/projects",
    component: <Projects />,
  },
  {
    type: "collapse",
    name: "Transactions",
    key: "transactions",
    icon: <Icon src={TransactionIcon} alt="transactions" />,
    route: "/transactions",
    component: <Transactions />,
  },
  {
    type: "collapse",
    name: "Bills",
    key: "bills",
    icon: <Icon src={BillsIcon} alt="bills" />,
    route: "/bills",
    component: <Bills />,
  },

  {
    type: "collapse",
    name: "Expenses",
    key: "expenses",
    icon: <Icon src={ExpensesIcon} alt="expenses" />,
    route: "/expenses",
    component: <Expenses />,
  },
  {
    type: "collapse",
    name: "Goals",
    key: "goals",
    icon: <Icon src={GoalsIcon} alt="goals" />,
    route: "/goals",
    component: <Goals />,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: <Icon src={SettingsIcon} alt="settings" />,
    route: "/settings",
    component: <Settings />,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "logout",
    icon: <Icon src={LogoutIcon} alt="logout" />,
    route: "/logout",
    component: <Logout />,
  },
];

export default routes;
