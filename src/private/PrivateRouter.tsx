import { RoutesWithNotFound } from "../components/RoutesWithNotFound/RoutesWithNotFound"
import { Navigate, Route } from "react-router-dom"
import { AppRoutes } from "../models/routes.model.ts"
import { Dashboard } from "./Dashboard/Dashboard.tsx"

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={AppRoutes.private.dashboard} />} />
      <Route path={AppRoutes.private.dashboard} element={<Dashboard />} />
    </RoutesWithNotFound>
  )
}
