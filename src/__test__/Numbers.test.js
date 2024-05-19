import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Numbers from '../app/calculator/components/Numbers';

describe('Numbers', () => {
    it('does not update output when max length is reached', () => {
        const setOutputMock = jest.fn();
        const output = "123456789";
        const numbers = render(
            <Numbers setOutput={setOutputMock} output={output} />
        );

        fireEvent.click(numbers.getByText('0'));
        expect(setOutputMock).not.toHaveBeenCalled();
    });

    it('updates output when a number is clicked', () => {
        const setOutputMock = jest.fn();
        const output = "123";
        const numbers = render(
            <Numbers setOutput={setOutputMock} output={output} />
        );

        fireEvent.click(numbers.getByText('4'));
        expect(setOutputMock).toHaveBeenCalledWith("1234");
    });
});