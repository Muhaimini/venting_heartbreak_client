import { Provider as QueryClientProvider } from "~/utils/react-query";
import "~/styles/globals.css";

// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Home",
//   description: "This is home page",
// };

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className="antialiased fixed w-screen h-screen">
        <QueryClientProvider>
          <div className="w-full h-full relative">{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
