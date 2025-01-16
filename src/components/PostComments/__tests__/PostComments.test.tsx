import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import PostComments from '../index';

describe('PostComments', () => {
it('should allow adding two comments', async () => {
    render(<PostComments />);

    // Pegando o textarea e o botão de comentário usando o data-testid
    const textarea = screen.getByTestId('comment-textarea');
    const button = screen.getByTestId('comment-button');

    // Inserindo o primeiro comentário
    userEvent.type(textarea, 'Primeiro comentário!');
    userEvent.click(button);

    // Aguardando até que o primeiro comentário apareça na lista
    await waitFor(() => {
    expect(screen.getByTestId('comment-0')).toBeInTheDocument();
    });

    // Inserindo o segundo comentário
    userEvent.clear(textarea);
    userEvent.type(textarea, 'Segundo comentário!');
    userEvent.click(button);

    // Aguardando até que o segundo comentário apareça na lista
    await waitFor(() => {
    expect(screen.getByTestId('comment-1')).toBeInTheDocument();
    });

    // Debugando o conteúdo renderizado para inspecionar o DOM
    screen.debug();

    // Verificando se ambos os comentários estão na lista
    const comments = screen.getAllByTestId('comment-item');
    expect(comments).toHaveLength(2);
});
});
