import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';

import { route } from 'nextjs-routes';

import config from 'configs/app';
import { useColorModeValue } from 'toolkit/chakra/color-mode';
import { Image } from 'toolkit/chakra/image';
import IconSvg from 'ui/shared/IconSvg';
import TestnetBadge from 'ui/snippets/navigation/TestnetBadge';

import { INVERT_FILTER } from './consts';

const LogoFallback = () => {
  return (
    <IconSvg
      name="networks/logo-placeholder"
      width="120px"
      height="40px"
      color={{ base: 'blue.600', _dark: 'white' }}
      aria-label="Network logo placeholder"
    />
  );
};

type Props = {
  className?: string;
};

const NetworkLogo = ({ className }: Props) => {

  const logoSrc = useColorModeValue(config.UI.navigation.logo.default, config.UI.navigation.logo.dark || config.UI.navigation.logo.default);

  return (
    <chakra.a
      className={ className }
      href={ route({ pathname: '/' }) }
      aria-label="Link to main page"
      display="flex"
      alignItems="center"
      gap={ 2 }
    >
      <Image
        h="40px"
        skeletonWidth="40px"
        src={ logoSrc }
        alt={ `${ config.chain.name } network logo` }
        fallback={ <LogoFallback/> }
        filter={{ _dark: !config.UI.navigation.logo.dark ? INVERT_FILTER : undefined }}
        objectFit="contain"
        objectPosition="left"
      />
      <Box position="relative">
        <Text
          fontSize="xl"
          fontWeight="700"
          lineHeight="1"
          whiteSpace="nowrap"
          color={{ base: 'gray.900', _dark: 'white' }}
        >
          Magnus
        </Text>
        <TestnetBadge position="absolute" top="full" right="-10px" mt="2px"/>
      </Box>
    </chakra.a>
  );
};

export default React.memo(chakra(NetworkLogo));
