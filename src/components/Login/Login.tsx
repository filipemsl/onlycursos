import { Button, Group, PasswordInput, Radio, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import { Logo } from '@/assets/Logo';

export function Login() {
  const navigate = useNavigate();
  function handleClick(values: Record<string, string>) {
    if (values.email !== null && values.senha !== null && values.tipo !== null) {
      navigate('/dashboard');
    }
  }
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      senha: '',
      tipo: 'aluno',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'E-mail inválido'),
      senha: (value) => (value.length < 3 ? 'Senha inválida' : null),
      tipo: (value) => (value === null ? 'Selecione o tipo de usuário' : null),
    },
  });
  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleClick(values))}>
        <div className={classes.container}>
          <Logo />

          <div className={classes.content}>
            <TextInput
              withAsterisk
              radius="md"
              size="md"
              placeholder="E-mail"
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
            <PasswordInput
              radius="md"
              size="md"
              placeholder="Senha"
              key={form.key('senha')}
              {...form.getInputProps('senha')}
            />
            <Button size="md" radius="md" type="submit" fullWidth color="#5B822E">
              Entrar
            </Button>

            <Radio.Group key={form.key('tipo')} {...form.getInputProps('tipo')}>
              <Stack pt="md" gap="xs">
                <Radio.Card className={classes.card} radius="md" value="aluno">
                  <Group wrap="nowrap">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8L8.11 7.06L5 5.5L12 2L19 5.5V10.5H18V6L15.89 7.06L16 8ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div>Eu sou aluno</div>
                  </Group>
                </Radio.Card>
                <Radio.Card className={classes.card} radius="md" value="professor">
                  <Group wrap="nowrap">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5 17C21.0304 17 21.5391 16.7893 21.9142 16.4142C22.2893 16.0391 22.5 15.5304 22.5 15V4C22.5 3.46957 22.2893 2.96086 21.9142 2.58579C21.5391 2.21071 21.0304 2 20.5 2H9.96C10.31 2.61 10.5 3.3 10.5 4H20.5V15H11.5V17M15.5 7V9H9.5V22H7.5V16H5.5V22H3.5V14H2V9C2 8.46957 2.21071 7.96086 2.58579 7.58579C2.96086 7.21071 3.46957 7 4 7H15.5ZM8.5 4C8.5 4.53043 8.28929 5.03914 7.91421 5.41421C7.53914 5.78929 7.03043 6 6.5 6C5.96957 6 5.46086 5.78929 5.08579 5.41421C4.71071 5.03914 4.5 4.53043 4.5 4C4.5 3.46957 4.71071 2.96086 5.08579 2.58579C5.46086 2.21071 5.96957 2 6.5 2C7.03043 2 7.53914 2.21071 7.91421 2.58579C8.28929 2.96086 8.5 3.46957 8.5 4Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div>Eu sou professor</div>
                  </Group>
                </Radio.Card>
              </Stack>
            </Radio.Group>
          </div>
        </div>
      </form>
    </>
  );
}
