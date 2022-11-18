import * as React from "react";
import { Button, Stack, Tag } from "@chakra-ui/react";
import { DownloadIcon, ArrowBackIcon } from "@chakra-ui/icons";

export const App = () => (
  <>
    <Stack direction="row" spacing={4} align="center" margin="10px">
      <h2>Square</h2>
      <Button variant="secondary">
        <DownloadIcon />
      </Button>
    </Stack>
    <Stack direction="row" spacing={4} align="center" margin="10px">
      <h2>Rounded</h2>
      <Button variant="primary">
        <ArrowBackIcon />
      </Button>
    </Stack>
    {/* <Stack direction="row" spacing={4} align="center" margin="10px">
      <h2>Chips</h2>
      <Tag variant="solid">Chip</Tag>
    </Stack> */}
  </>
);
