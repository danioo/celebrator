"use client";

import { Box, Button, Checkbox, Group, PasswordInput, TextInput, Textarea, rem } from "@mantine/core";
import { z } from 'zod';
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";

const newCompanySchema = z.object({
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  description: z.string().min(10, { message: "Description should have at least 10 letters" }).max(50, { message: "Description should not have more than 50 letters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password should have at least 6 characters " }),
  confirmPassword: z.string(),
  termsOfService: z.boolean().refine(value => value === true, { message: "You need to agree to the terms of service" })
}).refine((values) => {
    return values.confirmPassword === values.password
  },
  {
    message: "Passwords needs to match",
    path: ["confirmPassword"]
  }
);

export default function CompanyForm() {
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: false,
    },
    validate: zodResolver(newCompanySchema),
  });

  return (
    <Box maw={rem("50vw")} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput withAsterisk label="Company name" placeholder="Your company name" {...form.getInputProps('name')} />
        <Textarea withAsterisk label="Description" placeholder="Some description" autosize maxRows={4} {...form.getInputProps('description')} />
        <TextInput withAsterisk label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
        <PasswordInput withAsterisk label="Password" placeholder="Type your password" {...form.getInputProps('password')} />
        <PasswordInput withAsterisk label="Confirm password" placeholder="Confirm your password" {...form.getInputProps('confirmPassword')} />

        <Checkbox mt="md" label="I agree to terms of service" {...form.getInputProps('termsOfService')} />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Register</Button>
        </Group>
      </form>
    </Box>
  )
}