import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import chakraTheme from '@/styles/theme';
import { AuthProvider } from '@/lib/auth';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <CSSReset />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
