'use client'

import {
  Text,
  SimpleGrid,
  UnstyledButton,
} from '@mantine/core';
import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
} from '@tabler/icons-react';
import classes from './TypeSelection.module.css';
import { useContext } from 'react';
import { CelebrationContext } from '../../app/new-celebration/celebration-provider';
import { useRouter } from 'next/navigation';

const types = [
  { title: 'Wedding', icon: IconCreditCard, color: 'violet' },
  { title: 'Birthday', icon: IconBuildingBank, color: 'indigo' },
  { title: 'Special occasion', icon: IconRepeat, color: 'blue' },
];

export default function TypeSelection() {
  const router = useRouter();
  const { setType } = useContext(CelebrationContext);

  const handleClick = (type: string) => {
    setType(type);

    router.push("/new-celebration/restaurant")
  }

  const mappedTypes = types.map((item) => (
    <UnstyledButton key={item.title} className={classes.item} onClick={() => handleClick(item.title)}>
      <item.icon color={item.color} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <SimpleGrid cols={7} mt="md">
      {mappedTypes}
    </SimpleGrid>
  )
}