export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="w-full">{children}</section>;
}
