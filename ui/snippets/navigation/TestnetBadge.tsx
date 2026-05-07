import { chakra, Box } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';

interface Props {
  className?: string;
}

const STYLES_BY_TYPE = {
  devnet: {
    label: 'DEVNET',
    color: 'white',
    bg: 'orange.500',
  },
  testnet: {
    label: 'TESTNET',
    color: 'white',
    bg: 'red.400',
  },
} as const;

const TestnetBadge = ({ className }: Props) => {
  const { networkType } = config.chain;

  if (networkType !== 'devnet' && networkType !== 'testnet') {
    return null;
  }

  const style = STYLES_BY_TYPE[networkType];

  return (
    <Box
      className={ className }
      as="span"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      px="4px"
      h="11px"
      borderRadius="2px"
      fontSize="7px"
      fontWeight="700"
      letterSpacing="0.4px"
      lineHeight="1"
      color={ style.color }
      bg={ style.bg }
      textTransform="uppercase"
    >
      { style.label }
    </Box>
  );
};

export default React.memo(chakra(TestnetBadge));
