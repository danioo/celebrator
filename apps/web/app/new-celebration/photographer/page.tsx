import { Grid, GridCol } from "@mantine/core";
import { getData } from "../../lib/server/data";
import Card from "../../../components/Card/Card";

export default async function PhotographerPage() {
  const data = await getData("photographer");

  return (
    <Grid p="md" align="stretch">
      {data?.map(company => (
        <GridCol span={3} key={company.id}>
          <Card title={company.title} description={company.description} rating={company.rating} contextKey="photographer" />
        </GridCol>
      ))}
    </Grid>
  )
}
