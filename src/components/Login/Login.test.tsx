import { render, screen } from '@test-utils';
import { Login } from './Login';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<Login />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
