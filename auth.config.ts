// import  {NextAuthConfig} from "next-auth";

// export const authConfig: NextAuthConfig = {
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return "/login"; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return {
//           redirect: {
//             destination: "/dashboard",
//             permanent: false,
//           },
//         };
//       }
//       return true;
//     },
//   },
//   providers: [], // Add providers with an empty array for now
// };

// export default NextAuth(authConfig);
