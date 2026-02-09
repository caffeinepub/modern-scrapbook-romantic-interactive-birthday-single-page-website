import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import ScrapbookSinglePage from './pages/ScrapbookSinglePage';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <ScrapbookSinglePage />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
