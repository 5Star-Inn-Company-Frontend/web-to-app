import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResetPage } from "./pages/auth/reset";
import { SignupPage } from "./pages/auth/register";
import { SigninPage } from "./pages/auth/signin";
import { DashboardHome } from "./pages/home";
import { OverviewPage } from "./pages/app/overview";
import { BrandingPage } from "./pages/app/branding";
import { LinkHandlingPage } from "./pages/app/link_handling";
import { InterfacePage } from "./pages/app/interface";
import { WebOveridesPage } from "./pages/app/web_overides";
import { AppPermissionPage } from "./pages/app/app_permission";
import { AppDownloadPage } from "./pages/app/appdownload";
import { NativePluginPage } from "./pages/app/native_pugin";
import { AppServicePage } from "./pages/app/app_service";
import { AppAccessPage } from "./pages/app/app_access";
import { Member } from "./components/memberFames/member/member";
import { MyAccount } from "./components/myAccount/MyAccount";
import { Settings } from "./components/settings/Settings";
import { SupportPage } from "./components/supportPage/SupportPage";
import { PushNotification } from "./components/pushNotification/PushNotification";
import { NativeNavigation } from "./components/nativeNavigation/NativeNavigation";
import { EditApp } from "./components/EditApp/EditApp";
import { CreateAppOverview } from "./components/CreateAppOverview/CreateAppOverview";
import { Plan } from "./components/plan/Plan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="members">
          {/* <Route path="/members" element={<Member />} /> */}
          <Route path="/members/myaccount" element={<MyAccount />} /> 
        </Route>
        {/* <Route path="settings">
          <Route path="/settings" element={<Settings />} />
        </Route> */}
        
        <Route path="app">
          <Route path="/app/settings" element={<Settings />} />
          <Route path="/app/members" element={<Member />} />
          <Route path="/app/overview" element={<CreateAppOverview />} />
          <Route path="/app/edit" element={<EditApp />} />
          <Route path="/app/edit/overview" element={<OverviewPage />} />
          <Route path="/app/:action/branding" element={<BrandingPage />} />
          <Route path="/app/:action/interface" element={<InterfacePage />} />
          <Route
            path="/app/:action/link_handling"
            element={<LinkHandlingPage />}
          />
          <Route
            path="/app/:action/web_overides"
            element={<WebOveridesPage />}
          />
          <Route
            path="/app/:action/app_permission"
            element={<AppPermissionPage />}
          />
          <Route
            path="/app/:action/native_plugins"
            element={<NativePluginPage />}
          />
          <Route
            path="/app/:action/appdownload"
            element={<AppDownloadPage />}
          />
          <Route path="/app/:action/native_navigation" element={<NativeNavigation />} />
          <Route path="/app/:action/push_notification" element={<PushNotification />} />
          <Route path="/app/:action/app_service" element={<AppServicePage />} />
          <Route path="/app/:action/app_support" element={<SupportPage />} />
          <Route path="/app/:action/app_plan" element={<Plan />} />
          <Route path="/app/:action/app_access" element={<AppAccessPage />} />
        </Route>
        <Route path="auth">
          <Route path="/auth/signin" element={<SigninPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/reset_password" element={<ResetPage />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
