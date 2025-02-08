import "@testing-library/jest-dom"
import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

test('renders children within QueryClientProvider', () => {
    const queryClient = new QueryClient();
    const { getByText } = render(
        <QueryClientProvider client={queryClient}>
            <div>Children</div>
        </QueryClientProvider>
    );
    expect(getByText('Children')).toBeInTheDocument();
});