import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResetPage } from "@/pages/auth/reset";
import { SignupPage } from "@/pages/auth/register";
import { SigninPage } from "@/pages/auth/signin";
import { DashboardHome } from "@/pages/home";
import { OverviewPage } from "@/pages/app/overview";
import { BrandingPage } from "@/pages/app/branding";
import { LinkHandlingPage } from "@/pages/app/link_handling";
import { InterfacePage } from "@/pages/app/interface";
import { WebOveridesPage } from "@/pages/app/web_overides";
import { AppPermissionPage } from "@/pages/app/app_permission";
import { AppDownloadPage } from "@/pages/app/appdownload";
import { NativePluginPage } from "@/pages/app/native_pugin";
import { AppServicePage } from "@/pages/app/app_service";
import { SupportPage } from "@/components/supportPage/SupportPage";
import { PushNotification } from "@/components/pushNotification/PushNotification";
import { NativeNavigation } from "@/components/nativeNavigation/NativeNavigation";
import { Plan } from "@/components/plan/Plan";
import Members from "@/pages/members";
import { AuthLayout } from "@/layouts/authLayout";
import MemberAccount from "@/features/members/MemberAccount";
import Settings from "./pages/settings";
import ViewApp from "./pages/app/viewapp";
import HomeDashboard from "@/layouts/HomeDashboard";
import AppDashboard from "@/layouts/AppDashboard";
import AppAccess from "@/pages/app/AppAccess";
import AppClone from "@/pages/app/AppClone";
import { CreateApp } from "@/components/CreateAppOverview/CreateApp";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
    return (
        <Router>
            <Toaster />
            <Routes>
                {/* Home Route */}
                <Route path="/" element={<HomeDashboard />}>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="app" element={<DashboardHome />} />
                    <Route path="members" element={<Members />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                {/* Members Route */}
                <Route path="members">
                    <Route path="account" element={<MemberAccount />} />
                </Route>

                {/* Auth Routes */}
                <Route path="auth" element={<AuthLayout />}>
                    <Route path="signin" element={<SigninPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="password_reset" element={<ResetPage />} />
                </Route>

                {/* App Routes */}
                <Route path="app/viewapp" element={<ViewApp />} />

                {/*Edit APP  Dynamic Action Routes */}
                <Route path="app" element={<AppDashboard />}>
                    <Route path="overview" element={<OverviewPage />} />
                    <Route path="create" element={<CreateApp />} />
                    <Route path="branding" element={<BrandingPage />} />
                    <Route path="link_handling" element={<LinkHandlingPage />} />
                    <Route path="interface" element={<InterfacePage />} />
                    <Route path="web_overrides" element={<WebOveridesPage />} />
                    <Route path="app_permission" element={<AppPermissionPage />} />
                    <Route path="native_plugins" element={<NativePluginPage />} />
                    <Route path="app_download" element={<AppDownloadPage />} />
                    <Route path="native_navigation" element={<NativeNavigation />} />
                    <Route path="push_notification" element={<PushNotification />} />
                    <Route path="app_service" element={<AppServicePage />} />
                    <Route path="app_support" element={<SupportPage />} />
                    <Route path="app_plan" element={<Plan />} />
                    <Route path="app_access" element={<AppAccess />} />
                    <Route path="app_clone" element={<AppClone />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
