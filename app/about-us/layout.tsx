export const metadata = {
  description: 'The best movies on the best framework',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children} &copy; Next JS is great!</div>;
}
