import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Options from '../app/calculator/components/Options';

describe('Options', () => {
    it('updates total when operations are clicked', () => {
        const setOutputMock = jest.fn();
        const setTotalMock = jest.fn();
        const options = render(
            <Options setOutput={setOutputMock} setTotal={setTotalMock} output="123" />
        );

        fireEvent.click(options.getByText('+'));
        expect(setTotalMock).toHaveBeenCalledWith('123+');
        fireEvent.click(options.getByText('='));
        expect(setTotalMock).toHaveBeenCalledWith('123+123');
        fireEvent.click(options.getByText('-'));
        expect(setTotalMock).toHaveBeenCalledWith('123+123-');
        fireEvent.click(options.getByText('='));
        expect(setTotalMock).toHaveBeenCalledWith('123+123-123');
    });
});