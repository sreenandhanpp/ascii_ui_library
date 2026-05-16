import React from 'react';
import { Button, AsciiUIProvider } from '@sreenandhanpp/ascii-ui';

export function App() {
  return (
    <AsciiUIProvider theme="cyberpunk" borderStyle="double">
      <div style={{ padding: "40px", fontFamily: "monospace" }}>
        <h1>ASCII/UI MONOREPO</h1>
        <p>Turborepo + pnpm workspaces + TypeScript</p>
        <Button variant="primary">INITIALIZED</Button>
      </div>
    </AsciiUIProvider>
  );
}
