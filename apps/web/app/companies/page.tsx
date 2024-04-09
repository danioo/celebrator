import { Grid, GridCol } from "@mantine/core";
import Card from "../../components/Card/Card";
import { getData } from "../lib/server/data";

export default async function CompaniesPage() {
  const data = await getData();

  return (
    <Grid p="md" align="stretch">
      {data?.map(company => (
        <GridCol span={3} key={company.id}>
          <Card title={company.title} description={company.description} rating={company.rating} category={company.category} />
        </GridCol>
      ))}
    </Grid>
  )
}
