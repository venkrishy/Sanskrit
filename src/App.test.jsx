import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />)
    expect(screen.getByText('Welcome to My App')).toBeInTheDocument()
  })

  it('renders a button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })
}) 