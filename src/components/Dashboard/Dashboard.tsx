import {
  ActionIcon,
  AppShell,
  Button,
  Menu,
  rem,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconDoorExit,
  IconFilePencil,
  IconHome,
  IconMoon,
  IconSchool,
  IconSettings,
  IconUserCog,
} from '@tabler/icons-react';
import logoOnly from '../../assets/logoText.svg';

export function Dashboard() {
  const { toggleColorScheme } = useMantineColorScheme();
  return (
    <>
      <AppShell footer={{ height: 60 }} padding="md">
        <AppShell.Main>
          <Text size="lg" fw={700}>
            Seja bem vindo
          </Text>
          <Text>Nome do usuário</Text>
        </AppShell.Main>
        <AppShell.Footer
          px="lg"
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img src={logoOnly} alt="Logo da Only" width="70" />
          <div>
            <Button
              variant="subtle"
              leftSection={<IconHome />}
              color="var(--mantine-color-green-9)"
            >
              Home
            </Button>
            <Button
              color="var(--mantine-color-green-9)"
              variant="subtle"
              leftSection={<IconFilePencil />}
            >
              Gerenciar notas
            </Button>
            <Button
              color="var(--mantine-color-green-9)"
              leftSection={<IconSchool />}
              variant="subtle"
            >
              Gerenciar turmas
            </Button>
            <Button
              color="var(--mantine-color-green-9)"
              variant="subtle"
              leftSection={<IconUserCog />}
            >
              Gerenciar professores
            </Button>
          </div>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon
                color="var(--mantine-color-green-9)"
                variant="subtle"
                aria-label="Settings"
                size="lg"
              >
                <IconSettings style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Configurações</Menu.Label>

              <Menu.Item
                onClick={toggleColorScheme}
                leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />}
              >
                Modo escuro
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Sua conta</Menu.Label>

              <Menu.Item
                color="red"
                leftSection={<IconDoorExit style={{ width: rem(14), height: rem(14) }} />}
              >
                Logoff
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </AppShell.Footer>
      </AppShell>
    </>
  );
}
