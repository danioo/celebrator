import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { getLoggedInUser } from '../../app/lib/server/appwrite';
import Link from 'next/link';

export async function UserButton() {
  const user = await getLoggedInUser();
  const userName = user?.name ?? "Guest";
  const userEmail = user?.email ?? "";

  return (
    <UnstyledButton component={Link} href={user ? "/profile" : "/sign-in"} className={classes.user} style={{padding: "var(--mantine-spacing-md)"}}>
      <Group>
        <Avatar
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {userName}
          </Text>

          <Text c="dimmed" size="xs">
            {userEmail}
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}