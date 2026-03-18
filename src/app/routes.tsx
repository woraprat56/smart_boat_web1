import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AIAssistantPage } from "./pages/AIAssistantPage";
import { DashboardPage } from "./pages/DashboardPage";
import { SettingsPage } from "./pages/SettingsPage";
import { EditProfilePage } from "./pages/EditProfilePage";
import { AboutUsPage } from "./pages/AboutUsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "ai-assistant", Component: AIAssistantPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "settings", Component: SettingsPage },
      { path: "edit-profile", Component: EditProfilePage },
      { path: "about", Component: AboutUsPage },
    ],
  },
]);
