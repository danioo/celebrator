import { ThemeIcon, rem, useMantineTheme } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function SelectedIcon() {
  const theme = useMantineTheme();

  return (
    <ThemeIcon size={24} radius="xl" color={theme.colors.lime[9]} styles={{
      root: { backgroundColor: theme.colors.lime[9] }
    }}>
      <IconCheck style={{
        width: rem(16),
        height: rem(16),
        backgroundColor: theme.colors.lime[9],
        borderRadius: "20px",
      }} />
    </ThemeIcon>
  )
}