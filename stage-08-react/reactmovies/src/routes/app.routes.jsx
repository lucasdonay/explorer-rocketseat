import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Profile } from '../pages/Profile';
import { SignIn } from '../pages/SignIn';
import { SingUp } from '../pages/SingUp';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/logar" element={<SignIn/>} />
      <Route path="/criar" element={<SingUp />} />
    </Routes>
  );
}
