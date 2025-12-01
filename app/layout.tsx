export const metadata = {
  title: 'Cypher0x9 AI Agent',
  description: 'AI-powered Web3 & blockchain expert assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
