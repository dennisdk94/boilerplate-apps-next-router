import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o componente
    render(<Main />)

    // busca o elemento e verifica a existencia dele
    expect(
      screen.getByRole('heading', { name: /Teste react/i })
    ).toBeInTheDocument()
  })
})
