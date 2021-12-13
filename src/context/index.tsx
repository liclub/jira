/*
 * @Description: 
 * @Autor: lhy
 * @Date: 2021-12-07 13:42:01
 * @LastEditTime: 2021-12-13 10:31:53
 */
import { ReactNode } from "react";
import { AuthProvider } from "./auth.context";
import { QueryClient, QueryClientProvider } from 'react-query'
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client = {new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )
};
