import { Grid, GridCol } from "@mantine/core";
import React from "react";
import CelebrationSelection from "../../components/CelebrationSelection/CelebrationSelection";
import CelebrationProvider from "./celebration-provider";

export default async function Layout({ children }: {children: React.ReactNode}) {
  return (
    <CelebrationProvider>
      <Grid p="md" gutter={0}>
        <GridCol span={9}>
          {children}
        </GridCol>
        <GridCol span={3}>
          <CelebrationSelection />
        </GridCol>
      </Grid>
    </CelebrationProvider>
  )
}
