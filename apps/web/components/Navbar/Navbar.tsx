import { Group, Code, ScrollArea, Box, UnstyledButton, ThemeIcon } from '@mantine/core';
import {
  IconGridDots,
  IconHome,
  IconPlus,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { UserButton } from '../UserButton/UserButton';
import Link from 'next/link';

export default async function NavbarNested() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Link href="/" className={classes.brandLink}>Celebrator</Link>
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>
          <Box p="md">
            <UnstyledButton component={Link} href="/" className={classes.control}>
              <Group gap={0} className={classes.link}>
                <Box>
                  <ThemeIcon variant="light" size={30}>
                    <IconHome />
                  </ThemeIcon>
                </Box>
                <Box ml="md">
                  Home
                </Box>
              </Group>
            </UnstyledButton>

            <UnstyledButton component={Link} href="/companies" className={classes.control}>
              <Group gap={0} className={classes.link}>
                <Box>
                  <ThemeIcon variant="light" size={30}>
                    <IconGridDots />
                  </ThemeIcon>
                </Box>
                <Box ml="md">
                  Companies
                </Box>
              </Group>
            </UnstyledButton>

            <UnstyledButton component={Link} href="/new-celebration" className={classes.control}>
              <Group gap={0} className={classes.link}>
                <Box>
                  <ThemeIcon variant="light" size={30}>
                    <IconPlus />
                  </ThemeIcon>
                </Box>
                <Box ml="md">
                  Request celebration
                </Box>
              </Group>
            </UnstyledButton>
          </Box>
        </div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
