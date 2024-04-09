import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, ListItem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './medias/undraw_partying.svg'
import classes from './page.module.css';
import Link from 'next/link';

export default async function Page(): Promise<JSX.Element> {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Organize any type of <span className={classes.highlight}>celebration</span> with ease.
          </Title>
          <Text c="dimmed" mt="md">
            Using Celebrator app you can organize your next celebration with ease.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <ListItem>
              <b>Communication</b> – request and track date reservation to selected comapnies
            </ListItem>
            <ListItem>
              <b>Free</b> – whole flow costs you nothing at all
            </ListItem>
            <ListItem>
              <b>Universal</b> – book anything you need for your celebration in a single app
            </ListItem>
          </List>

          <Group mt={30} justify="center">
            <Button component={Link} href="/new-celebration" radius="xl" size="md" className={classes.control}>
              Get started
            </Button>

            <Button component={Link} href="/register-company" variant="outline" radius="xl" size="md" className={classes.control}>
              Register company
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
