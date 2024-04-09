import { ThemeIcon, rem, useMantineTheme } from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";

export default function NotSelectedIcon() {
  const theme = useMantineTheme();

  return (
    <ThemeIcon size={24} radius="xl" color={theme.colors.blue[3]} styles={{
      root: { backgroundColor: theme.colors.blue[3] }
    }}>
      <IconQuestionMark style={{
        width: rem(16),
        height: rem(16),
        backgroundColor: theme.colors.blue[3],
        borderRadius: "20px",
      }} />
    </ThemeIcon>
  )
}