import { Center, Loader } from "@mantine/core";
import classes from './loading.module.css';

export default function Loading() {
  return (
    <Center className={classes.wrapper}>
      <Loader />
    </Center>
  )
}