"use client";

import { List, ListItem, Title } from "@mantine/core";
import Link from "next/link";
import classes from './CelebrationSelection.module.css';
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CelebrationContext } from "../../app/new-celebration/celebration-provider";
import SelectedIcon from "../Icons/SelectedIcon/SelectedIcon";
import NotSelectedIcon from "../Icons/NotSelectedIcon/NotSelectedIcon";

const PATHNAMES = {
  type: "/new-celebration/type",
  restaurant: "/new-celebration/restaurant",
  photographer: "/new-celebration/photographer",
  band: "/new-celebration/band",
  florist: "/new-celebration/florist"
};

export default function CelebrationSelection() {
  const { type, restaurant, photographer, band, florist } = useContext(CelebrationContext);
  const pathname = usePathname();

  return (
    <>
      <Title size="h3" pb="md">Your selection:</Title>
      <List spacing="xs" size="sm" center>
        <Link href={PATHNAMES.type} className={`${classes.link} ${pathname === PATHNAMES.type ? classes.linkActive : ""}`}>
          <ListItem className={`${classes.listItem} ${pathname === PATHNAMES.type ? classes.listItemActive : ""}`} icon={type ? <SelectedIcon /> : <NotSelectedIcon />}>
            Type: {type ?? 'N/A'}
          </ListItem>
        </Link>
        <Link href={PATHNAMES.restaurant} className={`${classes.link} ${pathname === PATHNAMES.restaurant ? classes.linkActive : ""}`}>
          <ListItem className={`${classes.listItem} ${pathname === PATHNAMES.restaurant ? classes.listItemActive : ""}`} icon={restaurant ? <SelectedIcon /> : <NotSelectedIcon />}>
            Restaurant: {restaurant ?? 'N/A'}
          </ListItem>
        </Link>
        <Link href={PATHNAMES.photographer} className={`${classes.link} ${pathname === PATHNAMES.photographer ? classes.linkActive : ""}`}>
          <ListItem className={`${classes.listItem} ${pathname === PATHNAMES.photographer ? classes.listItemActive : ""}`} icon={photographer ? <SelectedIcon /> : <NotSelectedIcon />}>
            Photographer: {photographer ?? 'N/A'}
          </ListItem>
        </Link>
        <Link href={PATHNAMES.band} className={`${classes.link} ${pathname === PATHNAMES.band ? classes.linkActive : ""}`}>
          <ListItem className={`${classes.listItem} ${pathname === PATHNAMES.band ? classes.listItemActive : ""}`} icon={band ? <SelectedIcon /> : <NotSelectedIcon />}>
            Band: {band ?? 'N/A'}
          </ListItem>
        </Link>
        <Link href={PATHNAMES.florist} className={`${classes.link} ${pathname === PATHNAMES.florist ? classes.linkActive : ""}`}>
          <ListItem className={`${classes.listItem} ${pathname === PATHNAMES.florist ? classes.listItemActive : ""}`} icon={florist ? <SelectedIcon /> : <NotSelectedIcon />}>
            Florist: {florist ?? 'N/A'}
          </ListItem>
        </Link>
      </List>
    </>
  );
}