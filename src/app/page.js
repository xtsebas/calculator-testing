'use client';

import Calculator from "./calculator/pages/Calculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calculator />
    </main>
  );
}
