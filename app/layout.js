import 'bootstrap/dist/css/bootstrap.min.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Hi, I am Root Layout.js file</header>
        {children}
      </body>
    </html>
  );
}
