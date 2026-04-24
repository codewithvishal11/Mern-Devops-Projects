import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import Help from "../pages/Help/Help";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../components/profile/EditProfileForm";
import ViewProfile from "../components/profile/ViewProfile";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import TermsOfUse from "../pages/Policies/TermsOfUse";
import PrivacyPolicy from "../pages/Policies/PrivacyPolicy";
import RefundPolicy from "../pages/Policies/RefundPolicy";

// Protected route wrapper
import ProtectedRoutes from "./ProtectedRoutes";
import NoteFound from "../pages/NotFound/NoteFound";
import EBook from "../pages/Home/eBooks/EBook";
import Notes from "../pages/Home/notes/Notes";
import Setting from "../components/profile/Setting";
import FullBook from "../components/books/FullBook";
import NotesSingle from "../pages/Home/notes/NotesSingle";
import BookForm from "../admin/BookForm";
import Reviews from "../pages/Dashboard/Reviews";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ebook" element={<EBook />} />
          <Route path="/ebook/:id" element={<FullBook/>}/>
          <Route path="/notes" element={<Notes />} />
          <Route path="/notesingle/:id" element={<NotesSingle/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup/forgot-password" element={<ForgotPassword />} />
          <Route path="/policies/terms" element={<TermsOfUse />} />
          <Route path="/policies/privacy" element={<PrivacyPolicy />} />
          <Route path="/policies/refund" element={<RefundPolicy />} />
          {/* Admin Routes */}
          <Route path="/admin/postnote" element={<BookForm/>}/>
        </Route>

        {/* Protected routes */}
        <Route element={<ProtectedRoutes><MainLayout/></ProtectedRoutes>}>
          {/* Outlet will render child routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/review" element={<Reviews />} />
        </Route>

        <Route element={<ProtectedRoutes><Profile/></ProtectedRoutes>}>
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/view" element={<ViewProfile />} />
          <Route path="/profile/setting" element={<Setting/>}/>
       </Route>
        {/* Fallback route */}
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
