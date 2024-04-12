import { Raleway } from "next/font/google";
import './globals.css';

export const metadata = {
  title: "The Money Maker",
  description: "Generated by create next app",
};

const raleway = Raleway({
  subsets: ['latin'],
  display: "swap"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body style={styles.body} >{children}</body>
    </html>
  );
}

const styles = {
  body: {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  }
}
