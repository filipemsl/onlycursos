import { AppShell } from '@mantine/core';
import { ReactPortal } from 'react';

export function AppShellContainer(children: ReactPortal) {
  return (
    <AppShell footer={{ height: 60 }} padding="md">
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>Teste</AppShell.Footer>
    </AppShell>
  );
}
