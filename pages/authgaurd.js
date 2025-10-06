import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AuthGuard = ({ children }) => {
  const router = useRouter();
  const token = useSelector((state) => state.auth.accessToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.replace("/");
    }
    setLoading(false);
  }, [token, router]);

  if (loading) {
    return null;
  }

  return children;
};

export default AuthGuard;
