import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';
import
{ renderWithTranslation } from
    'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { fireEvent, screen } from '@testing-library/react';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggle', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
