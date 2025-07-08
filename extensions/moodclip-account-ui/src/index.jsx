import { reactExtension, Text } from '@shopify/ui-extensions-react/customer-account';

// This is the entry point for your extension
reactExtension('customer-account.page.render', () => <App />);

function App() {
  // We are now just returning the Home component directly
  return <Home />;
}

function Home() {
  // We use Shopify's built-in <Text> component instead of a <p> tag
  return <Text>MoodClip coming soon...</Text>;
}