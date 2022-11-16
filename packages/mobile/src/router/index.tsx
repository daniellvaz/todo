import { useAuthentication } from "../context/AuthContext";
import AuthenticatedRoutes from "./authenticated.routes";
import UnauthenticatedRoute from "./authenticated.routes";

export default function Router() {
  const { user } = useAuthentication();

  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoute />
}