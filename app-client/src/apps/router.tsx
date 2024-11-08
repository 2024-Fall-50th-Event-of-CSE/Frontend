import RootLayout from "@/components/layouts/RootLayout";
import AuthPage from "@/pages/AuthPage";
import CertificateCashPage from "@/pages/CertificatePage/CashPage";
import CertificateQuizPage from "@/pages/CertificatePage/QuizPage";
import CertificateSocialPage from "@/pages/CertificatePage/SocialPage";
import HomePage from "@/pages/HomePage";
import MyPage from "@/pages/MyPage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<AuthPage />} />
            <Route path="mypage" element={<MyPage />} />

            <Route path="certificate">
                <Route path="social" element={<CertificateSocialPage />} />
                <Route path="quiz" element={<CertificateQuizPage />} />
                <Route path="cash" element={<CertificateCashPage />} />
            </Route>
        </Route>
    )
);
