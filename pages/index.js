import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Code, Heading, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>

        <Text>
          Current User: <Code>{auth.user?.email}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}
