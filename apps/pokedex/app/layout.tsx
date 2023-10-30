import './global.css';
import StoreProvider from "../wrappers/StoreProvide";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
            {children}
        </body>
      </html>
    </StoreProvider>
  );
}

export default RootLayout;
