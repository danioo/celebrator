import { redirect } from "next/navigation";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { createAdminClient, getLoggedInUser } from "../../lib/server/appwrite";
import classes from './page.module.css';
import { cookies } from "next/headers";
import Link from "next/link";

async function signIn(data: FormData) {
  "use server";

  const { account } = await createAdminClient();
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  try {
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true
    });

    redirect("/");
  } catch (error) {
    console.error(error);
  }
}

export default async function SignInPage() {
  const user = await getLoggedInUser();

  if (user) {
    redirect('/')
  }

  return (
    <Container size={420}>
      <Title ta="center" p="lg" className={classes.title}>
        Sign in!
      </Title>

      <Paper withBorder shadow="md" p="lg" radius="md">
        <form action={signIn}>
          <TextInput label="Email" name="email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" name="password" placeholder="Your password" required mt="md" />
          <Group justify="end" mt="lg">
            {/* <Checkbox label="Remember me" /> */}
            <Anchor component={Link} href="/forgot-password" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Group justify="center" mt="lg">
            <Text c="dimmed" size="sm" ta="center" mt={5}>
              Do not have an account yet?{' '}
              <Anchor size="sm" component="button">
                Create account
              </Anchor>
            </Text>
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}