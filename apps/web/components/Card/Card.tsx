"use client";

import { Card, Text, CardSection, Rating, Pill, Stack, rem, Flex } from '@mantine/core';
import classes from './Card.module.css';
import { useContext } from 'react';
import { CelebrationContext } from '../../app/new-celebration/celebration-provider';
import { useRouter } from 'next/navigation';

export const CATEGORY_COLOR_MAP = {
  restaurant: 'grape.2',
  photographer: 'indigo.2',
  band: 'lime.2',
  florist: 'yellow.2',
}

export default function CardWithStats({ title, description, rating, category, contextKey }: { title: string, description: string, rating: number, category?: string, contextKey?: string}) {
  const router = useRouter();
  const { setRestaurant, setPhotographer, setBand, setFlorist } = useContext(CelebrationContext);

  const handleClick = (title: string) => {
    switch (contextKey) {
      case "restaurant":
        setRestaurant(title);
        router.push("/new-celebration/photographer");

        break;

      case "photographer":
        setPhotographer(title);
        router.push("/new-celebration/band");

        break;

      case "band":
        setBand(title);
        router.push("/new-celebration/florist");

        break;

      case "florist":
        setFlorist(title);

        break;

      default:
        break;
    }
  }

  return (
    <Card withBorder radius="md" className={`${classes.card} ${contextKey && classes.cardWithHover}`} onClick={() => handleClick(title)}>
      <Stack h={rem(150)} align="stretch" justify="space-between">
        <Text fz="sm" fw={700} className={classes.title}>
          {title}
        </Text>

        <Text c="dimmed" fz="xs" mah={rem(75)} styles={{
          root: {
            overflow: "hidden",
          }
        }}>
          {description}
        </Text>

        <CardSection className={classes.footer}>
          <Flex direction="row" justify="space-between" p="sm">
            <Text fw={500} size="sm">
              <Rating value={rating} />
            </Text>
            {category && <Pill bg={CATEGORY_COLOR_MAP[category as keyof typeof CATEGORY_COLOR_MAP]}>{category}</Pill>}
          </Flex>
        </CardSection>
      </Stack>
    </Card>
  );
}