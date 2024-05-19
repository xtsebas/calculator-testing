import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Screen from '../app/calculator/components/Screen';

describe('Screen', () => {
    test('handles unexpected values correctly', () => {
        // Renderiza el componente Screen con valores nulos y no definidos
        const { rerender } = render(<Screen value={null} total={undefined} />);
        
        // Obtiene los elementos del DOM que tienen el atributo "aria-label" con valor "value" y "total"
        const valueElement = screen.getByLabelText('value');
        const totalElement = screen.getByLabelText('total');

        // Verifica que los elementos de valor y total tengan el valor esperado
        expect(valueElement).toHaveValue('');
        expect(totalElement).toHaveValue('');

        // Prueba con valores numéricos
        rerender(<Screen value={12345} total={67890} />);
        expect(valueElement).toHaveValue('12345');
        expect(totalElement).toHaveValue('67890');

        // Prueba con valores booleanos
        rerender(<Screen value={true} total={false} />);
        expect(valueElement).toHaveValue('true');
        expect(totalElement).toHaveValue(""); 
    });

    test('updates DOM correctly when props change', () => {
        // Renderiza el componente Screen con valores iniciales
        const { rerender } = render(<Screen value="initial" total="initial" />);
        
        // Obtiene los elementos del DOM que tienen el atributo "aria-label" con valor "value" y "total"
        const valueElement = screen.getByLabelText('value');
        const totalElement = screen.getByLabelText('total');

        // Verifica que los elementos de valor y total tengan el valor inicial esperado
        expect(valueElement).toHaveValue('initial');
        expect(totalElement).toHaveValue('initial');

        // Actualiza los valores y verifica que los elementos del DOM se actualicen correctamente
        rerender(<Screen value="updated" total="updated" />);
        expect(valueElement).toHaveValue('updated');
        expect(totalElement).toHaveValue('updated');

        // Otra actualización para asegurar la consistencia
        rerender(<Screen value="final" total="final" />);
        expect(valueElement).toHaveValue('final');
        expect(totalElement).toHaveValue('final');
    });
});