import { Center, Container, Title } from "@mantine/core";
import CompanyForm from "../../components/CompanyForm/CompanyForm";

export default async function RegisterCompanyPage() {
  return (
    <Container fluid>
      <Center>
        <Title>Register as company</Title>

      </Center>

      <CompanyForm />
    </Container>
  );
}
