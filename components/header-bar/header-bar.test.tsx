import { render, screen } from '@/test-utils'

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    )
  })
})
