import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme as customTheme } from '@/styles/theme';
import { AuthProvider } from '@/lib/auth';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
